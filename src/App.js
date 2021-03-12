import './App.css';
import testParse from "./testParse";
import {useEffect, useState, useMemo} from "react";
import styled from "@emotion/styled";
import {
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import ReactJson from "react-json-view";

const collectIdeaGroups = (policies) => {
  const result = {};
  Object.keys(policies).forEach(policyName => {
    const handlePolicy = (policy) => {
      const allow = policy.allow;
      if (allow.OR) {
        if (allow.OR.full_idea_group) {
          allow.OR.full_idea_group.forEach(ideaGroup => result[ideaGroup] = true);
        } else if (Array.isArray(allow.OR)) {
          allow.OR.forEach(or => or.full_idea_group.forEach(ideaGroup => result[ideaGroup] = true));
        } else {
          console.log("Not matched")
        }
      } else if (Array.isArray(allow.full_idea_group)) {
        result[allow.full_idea_group[0]] = true;
        result[allow.full_idea_group[1]] = true;
      } else if (allow.hidden_trigger) {
        result[allow.full_idea_group] = true;
        allow.hidden_trigger.OR.has_idea_group.forEach(ideaGroup => {
          result[ideaGroup] = true;
        })
      } else {
        console.log("Not matched")
      }
    }
    const policySet = policies[policyName];
    if (Array.isArray(policySet)) {
      policySet.forEach((p) => handlePolicy(p))
    } else {
      handlePolicy(policySet);
    }

  })
  return Object.keys(result);
}

const trimPolicy = (policy) => {
  const {allow, monarch_power, potential, ai_will_do, name, ...trimmed} = policy;
  return trimmed;
};

const trimPolicyLonger = (policy) => {
  const {potential, ai_will_do, ...trimmed} = policy;
  return trimmed;
};
/*
  variants of "allow"
  allow: { full_idea_group: [string, string] }
  allow: { full_idea_group: string; OR: { full_idea_group: string[] } }
  allow: { full_idea_group: string; hidden_trigger: {OR: { full_idea_group: string[] } } }
  allow: { OR: {full_idea_group: string[] }; hidden_trigger: {OR: { full_idea_group: string[] } } }
  allow: { OR: [{full_idea_group: string[] },{full_idea_group: string[] }]}
 */
const tableBuilder = (policies, ideas) => {
  const result = {};
  ideas.forEach(i1 => {
    result[i1] = {};
    ideas.forEach(i2 => {
      result[i1][i2] = [];
    })
  })

  Object.keys(policies).forEach(policyName => {
    const handlePolicy = (policy) => {
      policy.name = policyName;
      const allow = policy.allow;
      if (allow.full_idea_group && Array.isArray(allow.full_idea_group)) {
        const idea1 = allow.full_idea_group[0];
        const idea2 = allow.full_idea_group[1];
        result[idea1][idea2].push(policy);
        result[idea2][idea1].push(policy);
      } else if (allow.full_idea_group && allow.OR && allow.OR.full_idea_group) {
        const idea1 = allow.full_idea_group;
        allow.OR.full_idea_group.forEach(idea2 => {
          result[idea1][idea2].push(policy);
          result[idea2][idea1].push(policy);
        })
      } else if (allow.full_idea_group && allow.hidden_trigger) {
        const idea1 = allow.full_idea_group;
        allow.hidden_trigger.OR.has_idea_group.forEach(idea2 => {
          //result[idea1][idea2].push(policy);
          //result[idea2][idea1].push(policy);
        })
      } else if (allow.hidden_trigger && allow.OR) {
        allow.OR.full_idea_group.forEach(idea1 => {
          allow.hidden_trigger.OR.has_idea_group.forEach(idea2 => {
            //result[idea1][idea2].push(policy);
            //result[idea2][idea1].push(policy);
          })
        })
      } else if (allow.OR && !allow.full_idea_group) {
        allow.OR[0].full_idea_group.forEach(idea1 => {
          allow.OR[1].full_idea_group.forEach(idea2 => {
            result[idea1][idea2].push(policy);
            result[idea2][idea1].push(policy);
          })
        })
      } else {
        console.log("Not matched");
      }
    }

    const policySet = policies[policyName];
    if (Array.isArray(policySet)) {
      policySet.forEach((p) => handlePolicy(p))
    } else {
      handlePolicy(policySet);
    }

  })

  ideas.forEach(idea => {
    result[idea][idea].pop();
  })

  return result;
}

const IdeaTable = styled(Table)`
  & > thead {
    & > tr {
      th {
        font-size: 10px !important;
        padding: 3px;
        position: sticky;
        top: 0;
        background: white;
        border-bottom: 1px solid #CCC  !important;
        box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
        z-index: 1;
      }
    }
  }
  & > tbody {
    & > tr {
      & >th {
        font-size: 10px !important;
        padding: 3px;
        position: sticky;
        left: 0;
        background: white;
        border-right: 1px solid #CCC !important;
        box-shadow: 5px 0 10px 0 rgba(0,0,0,0.2);
        z-index: 1;
      }
      & > td {
        padding: 0;
        border-bottom: 1px solid #CCC  !important;
        border-right: 1px solid #CCC  !important;
      }
    }
  }
`

const TableColumn = styled.div`
  width: 80vw;
  display: flex;
  overflow: auto;
`

const PolicyViewColumn = styled.div`
  width: 20vw;
  display: flex;
  overflow: auto;
  max-height: 100vh;
`

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100vh;
`

const PolicyRow = styled(Tr)`
  cursor: pointer;
  & td {
    font-size: 10px !important;
    padding: 0 5px;
  }
`;

const PolicyTable = (props) => {
  const {ideaGroups, setSelectedPolicy, policyTable} = props;
  return (
    <IdeaTable variant="stripped" colorScheme={"#FAFAFA"} size="sm">
      <Thead>
        <Tr>
          <Td>/</Td>
          {
            ideaGroups.map(idea1 => {
              return <th scope={"col"}>{idea1}</th>
            })
          }
        </Tr>
      </Thead>
      <Tbody>
        {
          ideaGroups.map(idea1 => {
            return (
              <Tr>
                <Th scope={"row"}>{idea1}</Th>
                {
                  ideaGroups.map(idea2 => {
                    return (
                      <Td>
                        <Table  size="sm" m={0}>
                          {
                            policyTable[idea1][idea2].map(policy => {
                              return (
                                <PolicyRow onClick={() => setSelectedPolicy(trimPolicyLonger(policy))}>
                                  <Td>
                                    {policy.name}
                                    (
                                    {policy.monarch_power}
                                    )
                                  </Td>
                                  <Td>
                                    <ul>
                                      {
                                        Object.keys(trimPolicy(policy)).map(key => (
                                          <li>{key}: {policy[key]}</li>))
                                      }
                                    </ul>

                                  </Td>
                                </PolicyRow>
                              );
                            })
                          }
                        </Table>
                      </Td>
                    );
                  })
                }
              </Tr>
            )
          })
        }
      </Tbody>
    </IdeaTable>
  )
}

const PolicyView = (props) => {
  const {ideaGroups, policyTable} = props;
  const [selectedPolicy, setSelectedPolicy] = useState();
  return (
    <AppWrapper>
      <TableColumn>
        {
          useMemo(() => <PolicyTable setSelectedPolicy={setSelectedPolicy} ideaGroups={ideaGroups} policyTable={policyTable}/>, [policyTable, ideaGroups])
        }
      </TableColumn>
      <PolicyViewColumn>
        {selectedPolicy &&
        <ReactJson displayDataTypes={false} quotesOnKeys={false} displayObjectSize={false} src={selectedPolicy}/>}
      </PolicyViewColumn>
    </AppWrapper>
  );
}

const App = () => {
  const [policies, setPolicies] = useState();
  const [ideaGroups, setIdeaGroups] = useState();
  const [policyTable, setPolicyTable] = useState();

  useEffect(() => {
    testParse().then((result) => {
      setPolicies(result);
      const ideas = collectIdeaGroups(result)
      setIdeaGroups(ideas);
      setPolicyTable(tableBuilder(result, ideas));
    })
  }, [])
  if (!policies || !ideaGroups || !policyTable) {
    return <></>
  }
  return (
    <PolicyView ideaGroups={ideaGroups} policyTable={policyTable}/>
  )
}

export default App;
