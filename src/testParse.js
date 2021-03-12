import {Jomini} from "jomini";
import data from "./policies";

const testParse = async () => {
  const parser = await Jomini.initialize();
  const out = parser.parseText(data);
  return out;
}

export default testParse;