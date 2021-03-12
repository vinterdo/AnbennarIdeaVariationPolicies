const data = `
########################################################
###### Vanilla Policies changed by flogi
########################################################

########################################################
###### Adm
########################################################

idea_variation_act_556 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = economic_ideas
\t\tfull_idea_group = quantity_ideas
\t}

\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { army_size_percentage = 0.9 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 1.1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 1.5
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 2.5
\t\t}
\t}

}


idea_variation_act_557 = {

\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = maritime_ideas

\t}

\tallow = {
\t\tfull_idea_group = administrative_ideas
\t\tfull_idea_group = maritime_ideas
\t}

\tnavy_tradition = 2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}

}



idea_variation_act_558 = {
\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = spy_ideas
\t}

\tglobal_spy_defence = 0.3
\tspy_offence = 0.2


\tai_will_do = {
\t\tfactor = 1
\t}
}



idea_variation_act_559 = {
\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = spy_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tyearly_absolutism = 0.75
\tyearly_corruption = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { cavalry_fraction = 0.2 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tcavalry_fraction = 0.28
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tcavalry_fraction = 0.38
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tcavalry_fraction = 0.45
\t\t}
\t}
}

idea_variation_act_560 = {
\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = defensive_ideas
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}

}

idea_variation_act_561 = {
\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = economic_ideas
\t}

\tdiplomats = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}




idea_variation_act_562 = {
\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = quality_ideas

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = quality_ideas
\t}

\tarmy_tradition_decay = -0.01

\tai_will_do = {
\t\tfactor = 0.75
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { army_tradition = 2 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_tradition = 30
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_tradition = 50
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_tradition = 80
\t\t}
\t}
}

idea_variation_act_563 = {
\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = quantity_ideas
\t}

\tmercenary_manpower = 0.15
\tmercenary_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_564 = {
\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = administrative_ideas

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = administrative_ideas
\t}

\tglobal_trade_goods_size_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_565 = {
\tmonarch_power = ADM


\tpotential = {

\t\thas_idea_group = defensive_ideas

\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0

\t\t}

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas

\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}


\tglobal_unrest = -1
\treligious_unity = 0.2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 6
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 8
\t\t}
\t}

}

idea_variation_act_566 = {
\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = economic_ideas
\t}


\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { average_effective_unrest = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 6
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 8
\t\t}
\t}
}

idea_variation_act_567 = {
\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = administrative_ideas

\t}

\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = administrative_ideas
\t}

\tyearly_corruption = -0.3

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_568 = {
\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = spy_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tglobal_missionary_strength = 0.02
\tglobal_spy_defence = 0.2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}


idea_variation_act_569 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = republik0

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = republik0
\t}

\tglobal_unrest = -1
\tglobal_spy_defence = 0.2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { average_effective_unrest = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 6
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 8
\t\t}
\t}
}


idea_variation_act_570 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = administrative_ideas

\t}

\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = administrative_ideas
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_571 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = economic_ideas
\t\tfull_idea_group = exploration_ideas
\t}

\tglobal_tariffs = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_572 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = economic_ideas
\t\tfull_idea_group = quality_ideas
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 10
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_573 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = administrative_ideas
\t\tfull_idea_group = exploration_ideas
\t}

\tglobal_colonial_growth = 10
\tcolonist_placement_chance = 0.1


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}



idea_variation_act_574 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = dynasty0

\t}

\tallow = {
\t\tfull_idea_group = administrative_ideas
\t\tfull_idea_group = dynasty0
\t}

\tdiplomats = 1
\tdiplomatic_reputation = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}



idea_variation_act_575 = {
\tmonarch_power = adm

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = expansion_ideas

\t}

\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = expansion_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}



idea_variation_act_576 = {
\tmonarch_power = ADM
\tpotential = {
\t\thas_idea_group = dynasty0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\treligious_unity = 0.2
\tglobal_missionary_strength = 0.01


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}


idea_variation_act_577 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = expansion_ideas

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = expansion_ideas
\t}


\tglobal_spy_defence = 0.35


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { average_autonomy_above_min = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 20
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 40
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 60
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 80
\t\t}
\t}
}




idea_variation_act_578 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = trade_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = trade_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_13
\t\t\thas_active_policy = idea_variation_act_578
\t\t\thas_active_policy = idea_variation_act_206
\t\t\thas_active_policy = idea_variation_act_219
\t\t\thas_active_policy = idea_variation_act_227
\t\t\thas_active_policy = idea_variation_act_333
\t\t\thas_active_policy = idea_variation_act_498

\t\t\t}
\t\t}
\t}

\tidea_cost = -0.075


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_579 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = economic_ideas
\t}

\treduced_liberty_desire = 10

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_580 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = innovativeness_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = innovativeness_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_581 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = administrative_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = administrative_ideas
\t}

\tdiplomatic_annexation_cost = -0.15

\tai_will_do = {
\t\tfactor = 1

\t}

}

idea_variation_act_582 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = expansion_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = expansion_ideas
\t}

\tglobal_tariffs = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}



idea_variation_act_583 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = offensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = offensive_ideas
\t}

\tglobal_unrest = -1
\tyears_of_nationalism = -5

\tai_will_do = {
\t\tfactor = 1

\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 6
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 8
\t\t}
\t}
}

idea_variation_act_584 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = quality_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = quality_ideas
\t}

\tprestige = 1
\tprestige_decay = -0.01

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_585 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_trade_goods_size_modifier = 0.1
\tproduction_efficiency = 0.1

\tai_will_do = {
\t\tfactor = 0.6
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { production_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_586 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = administrative_ideas
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = administrative_ideas
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\ttrade_efficiency = 0.2
\tglobal_ship_repair = 0.2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_587 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = expansion_ideas
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = expansion_ideas
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tglobal_tariffs = 0.2
\tglobal_ship_repair = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}



########################################################
###### Dip
########################################################

idea_variation_act_588 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = economic_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_588
\t\t\thas_active_policy = idea_variation_act_591
\t\t\thas_active_policy = idea_variation_act_21
\t\t\thas_active_policy = idea_variation_act_138
\t\t\thas_active_policy = idea_variation_act_425
\t\t\thas_active_policy = idea_variation_act_502
\t\t\thas_active_policy = idea_variation_act_551

\t\t\t}
\t\t}
\t}

\tbuild_cost = -0.1


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}

\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { production_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.5
\t\t}
\t}
}


idea_variation_act_589 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_sailors_modifier = 0.25
\tnaval_maintenance_modifier = -0.1

\tai_will_do = {
\t\tfactor = 0.6
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size = 50
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size = 100
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size = 150
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size = 200
\t\t}
\t}
}



idea_variation_act_590 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = offensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = offensive_ideas
\t}

\ttrade_efficiency = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_591 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = economic_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_588
\t\t\thas_active_policy = idea_variation_act_591
\t\t\thas_active_policy = idea_variation_act_21
\t\t\thas_active_policy = idea_variation_act_138
\t\t\thas_active_policy = idea_variation_act_425
\t\t\thas_active_policy = idea_variation_act_502
\t\t\thas_active_policy = idea_variation_act_551

\t\t\t}
\t\t}
\t}

\tbuild_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { tax_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.5
\t\t}

\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { average_autonomy_above_min = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 20
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 40
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 60
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_autonomy_above_min = 80
\t\t}
\t}
}






idea_variation_act_592 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = defensive_ideas
\t}
\tglobal_ship_recruit_speed = -0.33

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}


idea_variation_act_593 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = administrative_ideas
\t}

\ttrade_efficiency = 0.25

\tai_will_do = {
\t\tfactor = 1.2
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_594 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = exploration_ideas

\t}

\tallow = {
\t\tfull_idea_group = expansion_ideas
\t\tfull_idea_group = exploration_ideas
\t}

\tglobal_colonial_growth = 20

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}


idea_variation_act_595 = {

\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = innovativeness_ideas

\t}

\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = innovativeness_ideas
\t}

\tcolonist_placement_chance = 0.1
\tglobal_trade_power = 0.15


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}

\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}



idea_variation_act_596 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}



\tglobal_tariffs = 0.1
\treligious_unity = 0.2

\tai_will_do = {
\t\tfactor = 1

\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.25
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.25
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.25
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.25
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}




idea_variation_act_597 = {
\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = expansion_ideas

\t}

\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = expansion_ideas
\t}


\tnaval_forcelimit_modifier = 0.33


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size_percentage = 0.9 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size_percentage = 1.1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size_percentage = 1.5
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size_percentage = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tnavy_size_percentage = 2.5
\t\t}
\t}
}

idea_variation_act_598 = {
\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = dynasty0

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = dynasty0
\t}


\tdiplomatic_reputation = 2


\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_599 = {
\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = trade_ideas

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = trade_ideas
\t}

\ttrade_efficiency = 0.3


\t\tai_will_do = {
\t\tfactor = 1.5

\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_600 = {
\tmonarch_power = MIL
\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = maritime_ideas

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = maritime_ideas
\t}

\theavy_ship_power = 0.15


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}


idea_variation_act_601 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = trade_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tglobal_foreign_trade_power = 0.3

\tai_will_do = {
\t\tfactor = 0.8
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_602 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tdiplomats = 1
\tdiplomatic_reputation = 1

\tai_will_do = {
\t\tfactor = 0.8
\t}
}

idea_variation_act_603 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tnavy_tradition_decay = -0.02

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}



idea_variation_act_604 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = defensive_ideas
\t}

\tnaval_morale = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}



idea_variation_act_605 = {
\tmonarch_power = MIL
\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = quantity_ideas
\t}

\tgalley_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_galley = 10 }
\t\t}
\t}

}

idea_variation_act_606 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = quality_ideas

\t}

\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = quality_ideas
\t}
\ttrade_efficiency = 0.25

\tai_will_do = {
\t\tfactor = 1.2
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}



idea_variation_act_607 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = quantity_ideas
\t}
\tglobal_trade_goods_size_modifier = 0.15


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_608 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = expansion_ideas

\t}

\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = expansion_ideas
\t}

\ttrade_efficiency = 0.15
\ttrade_steering = 0.15


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_609 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = expansion_ideas

\t}

\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = expansion_ideas
\t}

\tglobal_trade_power = 0.15
\tdiplomatic_reputation = 1

\tai_will_do = {
\t\tfactor = 0.8
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_610 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = republik0
\t\thas_idea_group = trade_ideas

\t}

\tallow = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = trade_ideas
\t}

\tglobal_foreign_trade_power = 0.3

\tai_will_do = {
\t\tfactor = 0.6
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_611 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = republik0

\t}

\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = republik0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\tdiplomatic_reputation = 2
\timprove_relation_modifier = 0.1


\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_612 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = quality_ideas

\t}

\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = quality_ideas
\t}

\tdiplomatic_reputation = 2


\tai_will_do = {
\t\tfactor = 1
\t}

}



idea_variation_act_613 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = republik0

\t}

\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = republik0
\t}

\trange = 0.25
\tglobal_colonial_growth = 10

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_614 = {
\tmonarch_power = MIL
\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = republik0

\t}

\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = republik0
\t}

\tlight_ship_cost = -0.15
\tlight_ship_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_light_ship = 10 }
\t\t}
\t}
}


idea_variation_act_615 = {

\tmonarch_power = ADM
\tpotential = {
\t\thas_idea_group = trade_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tglobal_trade_goods_size_modifier = 0.1
\tglobal_missionary_strength = 0.02

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}


}

idea_variation_act_616 = {

\tmonarch_power = MIL
\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tnaval_morale = 0.1
\trecover_navy_morale_speed = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_617 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = dynasty0

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = dynasty0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\tnum_accepted_cultures = 1
\timprove_relation_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_618 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = exploration_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = exploration_ideas
\t}

\tglobal_colonial_growth = 20
\ttolerance_heathen = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_619 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = spy_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = spy_ideas
\t}


\tglobal_unrest = -2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { average_effective_unrest = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 6
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 8
\t\t}
\t}
}

idea_variation_act_620 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = influence_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = influence_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\timprove_relation_modifier = 0.1
\tdiplomatic_reputation = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_621 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tculture_conversion_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_622 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = maritime_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = maritime_ideas
\t}

\tnaval_attrition = -0.5

\tai_will_do = {
\t\tfactor = 0
\t}
}

idea_variation_act_623 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = diktatur0

\t}

\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = diktatur0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_624 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = republik0

\t}

\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = republik0
\t}

\trange = 0.25
\ttrade_range_modifier = 0.5

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_625 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = staatsverwaltung0

\t}

\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tglobal_foreign_trade_power = 0.2
\ttrade_efficiency = 0.1

\tai_will_do = {
\t\tfactor = 0.9
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_626 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = quality_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = quality_ideas
\t}


\tglobal_institution_spread = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_627 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = festung0

\t}

\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = festung0
\t}

\tcaravan_power = 0.25

\tai_will_do = {
\t\tfactor = 0.7
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { trade_income_percentage = 0.2 }
\t\t}
\t}
}

idea_variation_act_628 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = republik0
\t\thas_idea_group = influence_ideas

\t}

\tallow = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = influence_ideas
\t}

\tdiplomatic_annexation_cost = -0.1
\tglobal_unrest = -1

\tai_will_do = {
\t\tfactor = 0.9
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tAND = {
\t\t\t\tNOT = { average_effective_unrest = 1 }

\t\t\t}
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 6
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\taverage_effective_unrest = 8
\t\t}
\t}
}


########################################################
###### Mil
########################################################



idea_variation_act_629 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = administrative_ideas
\t\tfull_idea_group = quantity_ideas
\t}

\tmanpower_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}

}

idea_variation_act_630 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = expansion_ideas
\t\tfull_idea_group = quality_ideas
\t}

\tleader_land_fire = 2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_631 = {

\tmonarch_power = ADM


\tpotential = {
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = administrative_ideas

\t}

\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tfull_idea_group = administrative_ideas
\t}

\tstate_maintenance_modifier = -0.75

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_632 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = economic_ideas

\t}

\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = economic_ideas
\t}
\tartillery_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { artillery_fraction = 0.2 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tartillery_fraction = 0.28
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tartillery_fraction = 0.38
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tartillery_fraction = 0.45
\t\t}
\t}
}

idea_variation_act_633 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas

\t}

\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = trade_ideas
\t}

\ttrade_steering = 0.15
\tmerchants = 1

\tai_will_do = {
\t\tfactor = 0.6
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_634 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = trade_ideas

\t}

\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = trade_ideas
\t}

\tinfantry_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}

}

idea_variation_act_635 = {
\tmonarch_power = DIP\t\t# Marine

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = maritime_ideas

\t}

\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tfull_idea_group = maritime_ideas
\t}

\tnaval_morale = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_636 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = exploration_ideas

\t}

\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tfull_idea_group = exploration_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_636
\t\t\thas_active_policy = idea_variation_act_660
\t\t\thas_active_policy = idea_variation_act_12
\t\t\thas_active_policy = idea_variation_act_31
\t\t\thas_active_policy = idea_variation_act_324

\t\t\t}
\t\t}
\t}

\tmanpower_recovery_speed = 0.1
\tland_attrition = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_637 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = offensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = offensive_ideas
\t}

\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_638 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = defensive_ideas
\t}

\tdefensiveness = 0.1


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_639 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = quality_ideas

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = quality_ideas
\t}

\tproduction_efficiency = 0.15
\ttrade_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1.2
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tinfantry_fraction = 0.28
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tinfantry_fraction = 0.38
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tinfantry_fraction = 0.45
\t\t}
\t}
}

idea_variation_act_640 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tfull_idea_group = quantity_ideas
\t}

\tfort_maintenance_modifier = -0.20
\tgarrison_size = 0.3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_641 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = offensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = offensive_ideas
\t}

\tcav_to_inf_ratio = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_642 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\treligious_unity = 0.2
\tglobal_heretic_missionary_strength = 0.03

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_643 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tland_morale = 0.05
\tsiege_ability = 0.05

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_644 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = exploration_ideas

\t}

\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = exploration_ideas
\t}

\tprivateer_efficiency = 1.0



\tai_will_do = {
\t\tfactor = 0.6
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_light_ship = 20 }
\t\t}
\t}
}

idea_variation_act_645 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1.2
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_646 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = quantity_ideas
\t}

\tdiplomatic_reputation = 1
\tland_forcelimit_modifier = 0.15


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { army_size_percentage = 0.9 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 1.1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 1.5
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tarmy_size_percentage = 2.5
\t\t}
\t}
}

idea_variation_act_647 = {
\tmonarch_power = MIL
\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = defensive_ideas
\t}

\tfire_damage_received = -0.075
\treinforce_speed = 0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_cities = 10 }
\t\t}
\t}

}

idea_variation_act_648 = {
\tmonarch_power = ADM
\tpotential = {
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = expansion_ideas
\t\tfull_idea_group = defensive_ideas
\t}

\tglobal_regiment_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_649 = {
\tmonarch_power = DIP
\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = offensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = offensive_ideas
\t}

\tdiplomatic_reputation = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_650 = {
\tmonarch_power = MIL
\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = exploration_ideas

\t}

\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tfull_idea_group = exploration_ideas
\t}

\tglobal_manpower_modifier = 0.25


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_651 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dynasty0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tlegitimacy = 2
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tlegitimacy = 95
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { legitimacy = 80 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { legitimacy = 60 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { legitimacy = 40 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { legitimacy = 20 }
\t\t}
\t}

}

idea_variation_act_652 = {

\tmonarch_power = DIP


\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas

\t}

\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tfull_idea_group = expansion_ideas
\t}

\tland_forcelimit_modifier = 0.15
\tglobal_colonial_growth = 10

\tai_will_do = {
\t\tfactor = 0.8
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_653 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tnaval_forcelimit_modifier = 0.15
\tembargo_efficiency = 0.25

\tai_will_do = {
\t\tfactor = 0.8
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_654 = {
\tmonarch_power = DIP\t\t# Marine

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = quality_ideas


\t}
\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = quality_ideas

\t}

\tlight_ship_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_light_ship = 10 }
\t\t}
\t}
}

idea_variation_act_655 = {
\tmonarch_power = DIP\t\t# Marine

\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tleader_naval_fire = 2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_656 = {
\tmonarch_power = DIP\t\t\t# Marine

\tpotential = {

\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tOR = {
\t\t\tfull_idea_group = handel0
\t\t\tfull_idea_group = galle0
\t\t\tfull_idea_group = gross0
\t\t\t}
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tleader_naval_shock = 2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_657 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tglobal_unrest = -1
\treduced_liberty_desire = 5

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_658 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = quantity_ideas
\t}

\tleader_land_shock = 2

\tai_will_do = {
\t\tfactor = 1.2
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_659 = {
\tmonarch_power = DIP\t\t\t\t# Marine

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tnaval_morale = 0.15

\tai_will_do = {
\t\tfactor = 0.8
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_660 = {
\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\tfull_idea_group = defensive_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_636
\t\t\thas_active_policy = idea_variation_act_660
\t\t\thas_active_policy = idea_variation_act_12
\t\t\thas_active_policy = idea_variation_act_31
\t\t\thas_active_policy = idea_variation_act_324

\t\t\t}
\t\t}
\t}

\tland_attrition = -0.15

\tai_will_do = {
\t\tfactor = 0.9
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_661 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = defensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = defensive_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_662 = {
\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = offensive_ideas
\t}

\treduced_liberty_desire = 10

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_663 = {
\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = quantity_ideas

\t}

\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = quantity_ideas
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}



########################################################
###### Idea Variation Policies by flogi
########################################################

########################################################
###### State Administration
########################################################

idea_variation_act_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tfull_idea_group = flottenbasis0
\t}

\tnaval_maintenance_modifier = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = kolonialimperium0


\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tfull_idea_group = kolonialimperium0
\t}

\tglobal_colonial_growth = 15
\tglobal_tariffs = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\tOR = {
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tOR = {
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tnaval_forcelimit_modifier = 0.33

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_4 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tfull_idea_group = exploration_ideas
\t}

\tcolonists = 1
\tcolonist_placement_chance = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_5 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tfull_idea_group = offensive_ideas
\t}

\tcore_creation = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_6 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tfull_idea_group = soldnerheer0
\t}

\tmercenary_discipline = 0.05

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_7 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_8 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tfull_idea_group = nationalismus0
\t}


\tadvisor_cost = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Jurisprudence / Justiz
########################################################


idea_variation_act_10 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tfull_idea_group = assimilation0
\t}

\tglobal_institution_spread = 0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_11 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tfull_idea_group = trade_ideas
\t}

\tglobal_tax_modifier = 0.1
\tproduction_efficiency = 0.1
\ttrade_efficiency = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_12 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tfull_idea_group = offensive_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_636
\t\t\thas_active_policy = idea_variation_act_660
\t\t\thas_active_policy = idea_variation_act_12
\t\t\thas_active_policy = idea_variation_act_31
\t\t\thas_active_policy = idea_variation_act_324

\t\t\t}
\t\t}
\t}

\tland_attrition = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_13 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tfull_idea_group = gesellschaft0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_13
\t\t\thas_active_policy = idea_variation_act_578
\t\t\thas_active_policy = idea_variation_act_206
\t\t\thas_active_policy = idea_variation_act_219
\t\t\thas_active_policy = idea_variation_act_227
\t\t\thas_active_policy = idea_variation_act_333
\t\t\thas_active_policy = idea_variation_act_498

\t\t\t}
\t\t}
\t}

\tidea_cost = -0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_14 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tglobal_trade_goods_size_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_15 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = waffenqualitat0


\t}
\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = waffenqualitat0

\t}

\tnaval_morale = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_16 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = justiz0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tfull_idea_group = influence_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.1
\tdiplomatic_reputation = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Development / Entwicklung
########################################################

idea_variation_act_17 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\tfull_idea_group = waffenqualitat0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_18 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\tfull_idea_group = trade_ideas
\t}

\tmerchants = 1
\tglobal_trade_power = 0.1


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_19 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\tfull_idea_group = maritime_ideas
\t}

\tglobal_ship_recruit_speed = -0.25
\tnaval_attrition = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_20 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\tfull_idea_group = generalstab0
\t}

\tyearly_army_professionalism = 0.01
\tdrill_gain_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_21 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\tfull_idea_group = quantity_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_588
\t\t\thas_active_policy = idea_variation_act_591
\t\t\thas_active_policy = idea_variation_act_21
\t\t\thas_active_policy = idea_variation_act_138
\t\t\thas_active_policy = idea_variation_act_425
\t\t\thas_active_policy = idea_variation_act_502
\t\t\thas_active_policy = idea_variation_act_551

\t\t\t}
\t\t}
\t}

\tbuild_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_22 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = entwicklung0

\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0

\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tglobal_tax_modifier = 0.15
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_23 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tfull_idea_group = propaganda0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_23
\t\t\thas_active_policy = idea_variation_act_153
\t\t\thas_active_policy = idea_variation_act_169
\t\t\thas_active_policy = idea_variation_act_238
\t\t\thas_active_policy = idea_variation_act_302
\t\t\thas_active_policy = idea_variation_act_340
\t\t\t}
\t\t}
\t}

\tdevelopment_cost = -0.1
\tdiplomatic_reputation = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_24 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\tfull_idea_group = quality_ideas
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Health/Gesundheit
########################################################

idea_variation_act_25 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tfull_idea_group = offensive_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_26 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\tOR = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tOR = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = wehrpflicht0
\t\t}
\t}

\tmanpower_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_27 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tfull_idea_group = gesellschaft0
\t}

\tglobal_tax_modifier = 0.15
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { production_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_28 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tfull_idea_group = festung0
\t}

\tembracement_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_29 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tfull_idea_group = assimilation0
\t}

\tdiplomatic_annexation_cost = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_30 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tfull_idea_group = kolonialimperium0
\t}

\tnative_assimilation = 0.25
\tnative_uprising_chance = -0.25
\tglobal_colonial_growth = 10

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_31 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tfull_idea_group = quality_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_636
\t\t\thas_active_policy = idea_variation_act_660
\t\t\thas_active_policy = idea_variation_act_12
\t\t\thas_active_policy = idea_variation_act_31
\t\t\thas_active_policy = idea_variation_act_324

\t\t\t}
\t\t}
\t}

\tland_attrition = -0.15


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_32 = {

\tmonarch_power = MIL\t\t# Marine

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tfull_idea_group = maritime_ideas
\t}


\tnaval_morale = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

########################################################
###### Dictatorship / Diktatur Ideen
########################################################

idea_variation_act_33 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = diktatur0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = nationalismus0
\t}

\tglobal_tax_modifier = 0.15
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_34 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = diktatur0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = assimilation0
\t}

\tculture_conversion_cost = -0.1
\tembracement_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_35 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = diktatur0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = propaganda0
\t}

\tglobal_unrest = -1
\tglobal_trade_goods_size_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_36 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = diktatur0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = gesellschaft0
\t}

\tembracement_cost = -0.1
\tglobal_institution_spread = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_37 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = diktatur0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 5.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_37_1 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = diktatur0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 10.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_37_2 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = diktatur0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 15.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_37_3 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = diktatur0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 20.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

#idea_variation_act_38 = {  # unused
#}

idea_variation_act_39 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = diktatur0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = diktatur0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tstate_maintenance_modifier = -0.75

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_40 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = diktatur0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tfull_idea_group = diktatur0
\t\tfull_idea_group = quantity_ideas
\t}

\tland_morale = 0.15
\tdiscipline = -0.035

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

########################################################
###### Colonial Empire / Kolonialimperium
########################################################

idea_variation_act_41 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_trade_power = 0.1
\tmerchants = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_42 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = republik0
\t}

\trange = 0.5

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_43 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tglobal_tariffs = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_44 = {

\tmonarch_power = DIP\t\t# Marine

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = galle0
\t}

\tprivateer_efficiency = 0.25
\tgalley_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_45 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tfull_idea_group = gesundheit0
\t}

\tglobal_autonomy = -0.05
\tglobal_unrest = -1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_46 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = humanist_ideas
\t}

\tglobal_colonial_growth = 25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_47 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = expansion_ideas
\t}

\tcolonists = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

########################################################
###### Assimilation
########################################################

idea_variation_act_48 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = festung0
\t}

\tcore_creation = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}




idea_variation_act_49 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tglobal_unrest = -2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_50 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\tdiplomatic_reputation = 1
\timprove_relation_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_51 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = assimilation0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 10.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_51_1 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = assimilation0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 20.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_51_2 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = assimilation0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 30.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_51_3 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = assimilation0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower = 40.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_52 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = quality_ideas
\t}

\tinfantry_power = 0.15

\tai_will_do = {
\t\tfactor = 15
\t}
}

idea_variation_act_53 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = humanist_ideas
\t}

\tyears_of_nationalism = -5
\tstability_cost_modifier = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Society / Gesellschaft
########################################################


idea_variation_act_54 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tmissionaries = 2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_55 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tdiplomatic_annexation_cost = -0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_56 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\tOR = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tOR = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = wehrpflicht0
\t\t}
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_57 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = waffenqualitat0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_58 = {

\tmonarch_power = MIL\t# Marine

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = gross0

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = gross0

\t}

\tleader_naval_fire = 1
\tleader_naval_shock = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

########################################################
###### Propaganda Ideas
########################################################

idea_variation_act_59 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tlegitimacy = 2
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_60 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = wehrpflicht0
\t}

\tland_maintenance_modifier = -0.2

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_61 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = offensive_ideas
\t}

\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_62 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tproduction_efficiency = 0.3

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Fleet Base / Flottenbasis
########################################################

idea_variation_act_63 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = expansion_ideas
\t}

\tglobal_ship_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_64 = {

\tmonarch_power = DIP\t\t# Marine

\tpotential = {

\t\tOR = {
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}



\t\thas_idea_group = waffenqualitat0


\t}
\tallow = {
\t\tOR = {
\t\t\tfull_idea_group = galle0
\t\t\tfull_idea_group = gross0
\t\t\t}

\t\t\tfull_idea_group = waffenqualitat0


\t}

\theavy_ship_power = 0.075
\tgalley_power = 0.075
\tlight_ship_power = 0.075
\ttransport_power = 0.075

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}



idea_variation_act_65 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = festung0
\t}

\tland_maintenance_modifier = -0.1
\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_66 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = economic_ideas
\t}

\ttrade_range_modifier = 0.25
\ttrade_steering = 0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_67 = {

\tmonarch_power = MIL\t\t\t\t# Marine

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = generalstab0
\t}


\tleader_naval_manuever = 2

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

########################################################
###### Nationalism / Nationalismus
########################################################

idea_variation_act_68 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = generalstab0
\t}

\tleader_land_shock = 1
\tleader_land_fire = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_69 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = defensive_ideas
\t}

\thostile_attrition = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_70 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = festung0
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_71 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_72 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tproduction_efficiency = 0.1
\tglobal_trade_goods_size_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_73 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = republik0
\t}

\trepublican_tradition = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 10
\t\t\tNOT = {
\t\t\t\trepublican_tradition = 80
\t\t\t}
\t\t}
\t\tmodifier = {
\t\t\tfactor = 10
\t\t\tNOT = {
\t\t\t\trepublican_tradition = 60
\t\t\t}
\t\t}
\t}
}

idea_variation_act_74 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = administrative_ideas
\t}

\tglobal_unrest = -2

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Imperialism / Imperialismus
########################################################

idea_variation_act_75 = {

\tmonarch_power = MIL

\tpotential = {

\t\thas_idea_group = soldnerheer0

\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {

\tfull_idea_group = soldnerheer0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tpossible_mercenaries = 1.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_76 = {

\tmonarch_power = DIP

\tpotential = {
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0

\t\t}

\t}
\tallow = {

\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\treligious_unity = 0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}



idea_variation_act_77 = {

\tmonarch_power = ADM

\tpotential = {

\t\thas_idea_group = expansion_ideas

\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {

\t\tfull_idea_group = expansion_ideas

\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tcore_creation = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_78 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {

\t\tfull_idea_group = quantity_ideas

\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tland_maintenance_modifier = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_79 = {

\tmonarch_power = DIP

\tpotential = {
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_80 = {

\tmonarch_power = DIP

\tpotential = {

\t\thas_idea_group = humanist_ideas

\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {

\t\tfull_idea_group = humanist_ideas

\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tdiplomatic_annexation_cost = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### General Staff / Generalstab
########################################################

idea_variation_act_81 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tsiege_ability = 0.1


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_82 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = propaganda0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_83 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = gesellschaft0
\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_84 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = administrative_ideas
\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075

\tai_will_do = {
\t\tfactor = 10
\t}
}

idea_variation_act_85 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = economic_ideas
\t}

\tland_maintenance_modifier = -0.1
\tnaval_maintenance_modifier = -0.1
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

########################################################
###### Standing Army / Stehendes Heer
########################################################

idea_variation_act_86 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_87 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = administrative_ideas
\t}

\tland_maintenance_modifier = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_88 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = nationalismus0
\t}

\tland_morale = 0.07


\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_89 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tglobal_sailors = 5000

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_89_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tglobal_sailors = 10000

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_89_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tglobal_sailors = 15000

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_89_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tglobal_sailors = 20000

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_90 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = influence_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Mercenary Army / Söldnerheer
########################################################

idea_variation_act_91 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = expansion_ideas
\t}

\tmerc_maintenance_modifier = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_92 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_93 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tfree_leader_pool = 2

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_94 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = humanist_ideas
\t}

\tyears_of_nationalism = -5
\tprestige_from_land = 1.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_95 = {

\tmonarch_power = DIP\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = trade_ideas
\t}

\tmercenary_discipline = 0.035

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_96 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = dynasty0

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = dynasty0
\t}

\tshock_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Conscription / Wehrpflicht
########################################################

idea_variation_act_97 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tinfantry_power = 0.1
\tland_morale = 0.05

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_98 = {

\tmonarch_power = DIP\t\t# Marine

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = flottenbasis0
\t}

\tnaval_morale = 0.15
\tnavy_tradition = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_99 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = kolonialimperium0
\t}

\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Weapon Quality / Waffenqualität
########################################################

idea_variation_act_100 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = economic_ideas
\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075

\tai_will_do = {
\t\tfactor = 10
\t}
}

idea_variation_act_101 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = festung0
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_102 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = spy_ideas

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = spy_ideas
\t}

\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_103 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = trade_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

########################################################
###### War Production / Kriegsproduktion
########################################################

idea_variation_act_104 = {

\tmonarch_power = ADM\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = economic_ideas
\t}

\tartillery_power = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_105 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = administrative_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\tinflation_reduction = 0.05
\tinterest = -1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_106 = {

\tmonarch_power = DIP \t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = trade_ideas
\t}

\tfire_damage = 0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

########################################################
###### Fortress / Festung
########################################################

idea_variation_act_107 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = festung0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tdefensiveness = 0.075
\tsiege_ability = 0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_108 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = administrative_ideas
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_109 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = festung0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tarmy_tradition = 1
\tshock_damage_received = -0.075

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_110 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = gesellschaft0
\t}

\thostile_attrition = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}


#########################################################
######## Version 2.0 Politiken/Policies
#########################################################


idea_variation_act_111 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = administrative_ideas
\t}

\tstate_maintenance_modifier = -0.5
\tyears_of_nationalism = -5

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_112 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tglobal_colonial_growth = 20

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}


idea_variation_act_113 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_tariffs = 0.15
\ttrade_efficiency = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_114 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = defensive_ideas
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_115 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = offensive_ideas
\t}

\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_116 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = quality_ideas
\t}

\tcolonist_placement_chance = 0.15
\tglobal_colonial_growth = 10

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_117 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = quantity_ideas
\t}

\tcolonists = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_118 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = entwicklung0
\t}

\tcolonist_placement_chance = 0.10
\treduced_liberty_desire = 10

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_119 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_colonial_growth = 15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_120 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = justiz0
\t}

\tglobal_unrest = -1
\tglobal_autonomy = -0.05
\tyearly_corruption = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_121 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = generalstab0
\t}

\tfree_leader_pool = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_122 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = stehendesheer0
\t}

\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_123 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = soldnerheer0
\t}

\tpossible_mercenaries = 0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_124 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = waffenqualitat0
\t}

\treinforce_speed = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_125 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = festung0
\t}

\tfort_maintenance_modifier = -0.25
\treduced_liberty_desire = 5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_126 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_127 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = administrative_ideas
\t}

\tgoverning_capacity = 250

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_128 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = humanist_ideas
\t}

\tnum_accepted_cultures = 1
\tnaval_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_129 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tstate_maintenance_modifier = -0.75


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_130 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\ttolerance_heathen = 1
\ttolerance_heretic = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_131 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tlegitimacy = 2
\trepublican_tradition = 0.3
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_132 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = defensive_ideas
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_133 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = quality_ideas
\t}


\tnaval_maintenance_modifier = -0.25


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_134 = {

\tmonarch_power = DIP\t\t\t\t# Marine

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = offensive_ideas
\t}

\tnaval_morale = 0.15
\trange = 0.2

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_135 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = quantity_ideas


\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = quantity_ideas

\t}

\trange = 0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_136 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = justiz0
\t}

\tglobal_autonomy = -0.1
\tglobal_unrest = -1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_137 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = gesundheit0
\t}

\tnavy_tradition = 1
\trange = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_138 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_588
\t\t\thas_active_policy = idea_variation_act_591
\t\t\thas_active_policy = idea_variation_act_21
\t\t\thas_active_policy = idea_variation_act_138
\t\t\thas_active_policy = idea_variation_act_425
\t\t\thas_active_policy = idea_variation_act_502
\t\t\thas_active_policy = idea_variation_act_551

\t\t\t}
\t\t}
\t}


\tbuild_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_139 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_sailors_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_140 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = stehendesheer0
\t}

\tglobal_manpower_modifier = 0.125

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_141 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = soldnerheer0
\t}

\tmercenary_cost = -0.15
\tpossible_mercenaries = 0.25


\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_142 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = waffenqualitat0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_143 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tland_morale = 0.05
\tinfantry_power = 0.1

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_144 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = administrative_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\tglobal_tax_modifier = 0.15
\tinterest = -1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_145 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = humanist_ideas
\t}

\tnum_accepted_cultures = 1
\tculture_conversion_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_146 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = expansion_ideas
\t}

\tcore_creation = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_147 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\ttolerance_own = 3

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_148 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = republik0
\t}

\trepublican_tradition = 0.3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_149 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = defensive_ideas
\t}

\tdefensiveness = 0.075
\twar_exhaustion = -0.02

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_150 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = propaganda0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = quantity_ideas
\t}

\tnaval_forcelimit = 10
\tland_forcelimit = 5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_150_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = propaganda0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = quantity_ideas
\t}

\tnaval_forcelimit = 20
\tland_forcelimit = 10

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_150_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = propaganda0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = quantity_ideas
\t}

\tnaval_forcelimit = 30
\tland_forcelimit = 15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_150_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = propaganda0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = quantity_ideas
\t}

\tnaval_forcelimit = 40
\tland_forcelimit = 25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_151 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = quality_ideas
\t}

\tland_morale = 0.05
\tarmy_tradition_decay = -0.01
\tnavy_tradition_decay = -0.01

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_152 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = justiz0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\timprove_relation_modifier = 0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_153 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_23
\t\t\thas_active_policy = idea_variation_act_153
\t\t\thas_active_policy = idea_variation_act_169
\t\t\thas_active_policy = idea_variation_act_238
\t\t\thas_active_policy = idea_variation_act_302
\t\t\thas_active_policy = idea_variation_act_340
\t\t\t}
\t\t}
\t}

\tdevelopment_cost = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_154 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tglobal_institution_spread = 0.1
\tstate_maintenance_modifier = -0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_155 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = gesundheit0
\t}

\tglobal_institution_spread = 0.2
\tembracement_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_156 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = stehendesheer0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_157 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = economic_ideas
\t\tfull_idea_group = nationalismus0

\t}

\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_15 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = propaganda0

\t}
\tallow = {

\t\tfull_idea_group = economic_ideas
\t\tfull_idea_group = propaganda0

\t}

\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_158 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = soldnerheer0
\t}

\tmercenary_discipline = 0.05

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_159 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = waffenqualitat0
\t}

\tmerchants = 1
\tglobal_trade_power = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_160 = {

\tmonarch_power = MIL \t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = propaganda0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tglobal_trade_goods_size_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_161 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = expansion_ideas
\t}

\tyears_of_nationalism = -5

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_162 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = humanist_ideas
\t}

\tenemy_core_creation = 0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_163 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tsame_culture_advisor_cost = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}



idea_variation_act_164 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tglobal_autonomy = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_165 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = offensive_ideas
\t}

\tland_morale = 0.07


\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_166 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = quality_ideas
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_167 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = quantity_ideas
\t}

\tglobal_manpower = 5
\tglobal_sailors = 1500

\tai_will_do = {
\t\tfactor = 1
\t}
}

# idea_variation_act_167_1 = {

\t# monarch_power = DIP

\t# potential = {
\t\t# current_age = age_of_reformation
\t\t# has_idea_group = nationalismus0
\t\t# has_idea_group = quantity_ideas

\t# }
\t# allow = {
\t\t# current_age = age_of_reformation
\t\t# full_idea_group = nationalismus0
\t\t# full_idea_group = quantity_ideas
\t# }

\t# global_manpower = 10
\t# global_sailors = 3000

\t# ai_will_do = {
\t\t# factor = 1
\t# }
# }

# idea_variation_act_167_2 = {

\t# monarch_power = DIP

\t# potential = {
\t\t# current_age = age_of_absolutism
\t\t# has_idea_group = nationalismus0
\t\t# has_idea_group = quantity_ideas

\t# }
\t# allow = {
\t\t# current_age = age_of_absolutism
\t\t# full_idea_group = nationalismus0
\t\t# full_idea_group = quantity_ideas
\t# }

\t# global_manpower = 15
\t# global_sailors = 4500

\t# ai_will_do = {
\t\t# factor = 1
\t# }
# }

# idea_variation_act_167_3 = {

\t# monarch_power = DIP

\t# potential = {
\t\t# current_age = age_of_revolutions
\t\t# has_idea_group = nationalismus0
\t\t# has_idea_group = quantity_ideas

\t# }
\t# allow = {
\t\t# current_age = age_of_revolutions
\t\t# full_idea_group = nationalismus0
\t\t# full_idea_group = quantity_ideas
\t# }

\t# global_manpower = 20
\t# global_sailors = 6000

\t# ai_will_do = {
\t\t# factor = 1
\t# }
# }



idea_variation_act_168 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = justiz0
\t}

\tgoverning_capacity = 250

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_169 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_23
\t\t\thas_active_policy = idea_variation_act_153
\t\t\thas_active_policy = idea_variation_act_169
\t\t\thas_active_policy = idea_variation_act_238
\t\t\thas_active_policy = idea_variation_act_302
\t\t\thas_active_policy = idea_variation_act_340
\t\t\t}
\t\t}

\t}

\tdevelopment_cost = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_170 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = gesundheit0
\t}

\tglobal_tax_modifier = 0.15
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_171 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = soldnerheer0
\t}

\thostile_attrition = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_172 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tfull_idea_group = waffenqualitat0
\t}


\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_173 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tmissionaries = 1
\treligious_unity = 0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_174 = {

\tmonarch_power = ADM

\tpotential = {
\t\t\thas_idea_group = gesellschaft0
\t\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = staatsverwaltung0

\t}

\tstate_maintenance_modifier = -0.75

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_287 = {

\tmonarch_power = ADM

\tpotential = {
\t\t\thas_idea_group = gesellschaft0
\t\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = administrative_ideas

\t}

\tstate_maintenance_modifier = -0.75

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_175 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_176 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = expansion_ideas
\t}

\treligious_unity = 0.2
\ttolerance_own = 2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_177 = {

\tmonarch_power = DIP\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = humanist_ideas
\t}

\ttolerance_heathen = 1
\ttolerance_heretic = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_178 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_institution_spread = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_179 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = defensive_ideas
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_180 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = offensive_ideas
\t}

\tembracement_cost = -0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_181 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = quality_ideas
\t}

\tartillery_power = 0.1
\tcavalry_power = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_182 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = quantity_ideas
\t}

\tland_forcelimit = 15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_182_1 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = quantity_ideas
\t}

\tland_forcelimit = 25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_182_2 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = quantity_ideas
\t}

\tland_forcelimit = 35

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_182_3 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = quantity_ideas
\t}

\tland_forcelimit = 40

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_183 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = entwicklung0
\t}

\tglobal_tariffs = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_184 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tglobal_trade_goods_size_modifier = 0.05
\tproduction_efficiency = 0.15


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_185 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\tfull_idea_group = soldnerheer0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_186 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = administrative_ideas
\t}

\tnative_assimilation = 0.5
\tdiplomatic_annexation_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_187 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = economic_ideas
\t}

\tadvisor_cost = -0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_188 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = expansion_ideas
\t}

\tcore_creation = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_189 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_foreign_trade_power = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_190 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = assimilation0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tglobal_missionary_strength = 0.03

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_191 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = defensive_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_192 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = offensive_ideas
\t}

\tglobal_missionary_strength = 0.02
\tculture_conversion_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}


idea_variation_act_193 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = quantity_ideas
\t}

\tcav_to_inf_ratio = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_194 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = entwicklung0
\t}


\tcolonist_placement_chance = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_195 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = generalstab0
\t}

\tland_morale = 0.05
\tfree_leader_pool = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_196 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = stehendesheer0
\t}

\tcavalry_power = 0.1
\tcav_to_inf_ratio = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_197 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = soldnerheer0
\t}


\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_198 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = waffenqualitat0
\t}


\tmil_tech_cost_modifier = -0.1
\ttrade_efficiency = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_199 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = assimilation0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tglobal_trade_goods_size_modifier = 0.05
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_200 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = administrative_ideas

\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = administrative_ideas
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tgoverning_capacity = 250

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_201 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = economic_ideas
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = economic_ideas
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tglobal_tax_modifier = 0.2
\tinflation_action_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_202 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tadvisor_pool = 5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_203 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_204 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_205 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_206 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t\tfull_idea_group = justiz0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_13
\t\t\thas_active_policy = idea_variation_act_578
\t\t\thas_active_policy = idea_variation_act_206
\t\t\thas_active_policy = idea_variation_act_219
\t\t\thas_active_policy = idea_variation_act_227
\t\t\thas_active_policy = idea_variation_act_333
\t\t\thas_active_policy = idea_variation_act_498

\t\t\t}
\t\t}
\t}

\tidea_cost = -0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_207 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tglobal_institution_spread = 0.1
\tinnovativeness_gain = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_208 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tstate_maintenance_modifier = -0.5
\tyearly_corruption = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_209 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = generalstab0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}



\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}

\t}

\tland_maintenance_modifier = -0.1
\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_210 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}



\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tglobal_manpower = 10

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_210_1 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}



\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tglobal_manpower = 20

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_210_2 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}



\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tglobal_manpower = 30

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_210_3 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}



\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tglobal_manpower = 40

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_211 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}



\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tinfantry_power = 0.1
\tcavalry_power = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_212 = {

\tmonarch_power = DIP

\tpotential = {

\thas_idea_group = festung0

\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}


\t}
\tallow = {

\tfull_idea_group = festung0

\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_213 = {

\tmonarch_power = MIL

\tpotential = {

\thas_idea_group = kriegsproduktion0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}




\t}
\tallow = {

\tfull_idea_group = kriegsproduktion0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}


\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_214 = {

\tmonarch_power = DIP\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = justiz0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\tinterest = -2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_215 = {

\tmonarch_power = ADM\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\timprove_relation_modifier = 0.1
\tdiplomatic_upkeep = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_216 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = gesundheit0
\t}

\treduced_liberty_desire = 10

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_217 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_unrest = -2
\tglobal_spy_defence = 0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_218 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tdiplomats = 1
\tdiplomatic_annexation_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_219 = {

\tmonarch_power = MIL\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = generalstab0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_13
\t\t\thas_active_policy = idea_variation_act_578
\t\t\thas_active_policy = idea_variation_act_206
\t\t\thas_active_policy = idea_variation_act_219
\t\t\thas_active_policy = idea_variation_act_227
\t\t\thas_active_policy = idea_variation_act_333
\t\t\thas_active_policy = idea_variation_act_498

\t\t\t}
\t\t}
\t}

\tidea_cost = -0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_220 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = stehendesheer0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.2


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_221 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower_modifier = 0.125

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_222 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = waffenqualitat0
\t}

\tmil_tech_cost_modifier = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_223 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = festung0
\t}

\tdiplomatic_reputation = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_224 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dynasty0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tland_morale = 0.05
\tsiege_ability = 0.05

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_225 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = justiz0
\t}

\tglobal_spy_defence = 0.35

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_226 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = entwicklung0
\t}

\tspy_offence = 0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_227 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = gesundheit0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_13
\t\t\thas_active_policy = idea_variation_act_578
\t\t\thas_active_policy = idea_variation_act_206
\t\t\thas_active_policy = idea_variation_act_219
\t\t\thas_active_policy = idea_variation_act_227
\t\t\thas_active_policy = idea_variation_act_333
\t\t\thas_active_policy = idea_variation_act_498

\t\t\t}
\t\t}
\t}

\tidea_cost = -0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_228 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = diktatur0
\t}

\ttechnology_cost = -0.075
\tdiplomatic_reputation = -2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_229 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = staatsverwaltung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\tinterest = -1
\tyearly_corruption = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_230 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = generalstab0
\t}

\tland_morale = 0.05
\tsiege_ability = 0.05


\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_231 = {

\tmonarch_power = ADM
\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = wehrpflicht0
\t}

\tmanpower_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_232 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = stehendesheer0
\t}

\tstability_cost_modifier = -0.5
\twar_exhaustion_cost = -0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_233 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = soldnerheer0
\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = soldnerheer0
\t}

\twar_exhaustion = -0.02
\tmerc_maintenance_modifier = -0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_234 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = festung0
\t}

\tartillery_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_235 = {

\tmonarch_power = MIL\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\tfull_idea_group = kriegsproduktion0
\t}

\tproduction_efficiency = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { production_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_236 = {

\tmonarch_power = ADM\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = justiz0
\t}

\tcolonists = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_237 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = gesundheit0
\t}

\tcolonist_placement_chance = 0.15
\tglobal_colonial_growth = 10

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_238 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_23
\t\t\thas_active_policy = idea_variation_act_153
\t\t\thas_active_policy = idea_variation_act_169
\t\t\thas_active_policy = idea_variation_act_238
\t\t\thas_active_policy = idea_variation_act_302
\t\t\thas_active_policy = idea_variation_act_340
\t\t\t}
\t\t}

\t}

\tdevelopment_cost = -0.1
\tdip_tech_cost_modifier = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_239 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = diktatur0
\t}

\tglobal_colonial_growth = 15
\tglobal_garrison_growth = 0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { num_of_colonists = 1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.1
\t\t\tNOT = { num_of_colonies = 1 }
\t\t}
\t}
}

idea_variation_act_240 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = generalstab0
\t}

\tleader_naval_manuever = 1
\tleader_land_manuever = 1
\tleader_siege = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_241 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = wehrpflicht0
\t}

\ttrade_efficiency = 0.20
\ttrade_range_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_242 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = stehendesheer0
\t}

\tglobal_sailors_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_243 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = soldnerheer0
\t}

\tpossible_mercenaries = 0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_244 = {

\tmonarch_power = MIL\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = waffenqualitat0
\t}

\tinfantry_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_245 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = festung0
\t}

\tdefensiveness = 0.075
\tsiege_ability = 0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_246 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\tfull_idea_group = kriegsproduktion0
\t}


\tcavalry_power = 0.15
\tcav_to_inf_ratio = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_247 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = entwicklung0
\t}

\tdiplomatic_annexation_cost = -0.10
\tdiplomatic_reputation = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_248 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = staatsverwaltung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\their_chance = 2
\tinterest = -1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_249 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = diktatur0
\t}

\tyears_of_nationalism = -10
\tglobal_unrest = 3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_250 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = gesundheit0
\t}

\ttechnology_cost = -0.05

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_251 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = generalstab0
\t}

\tyearly_absolutism = 1.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_252 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = soldnerheer0
\t}

\tmercenary_discipline = 0.05

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_253 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_254 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = waffenqualitat0
\t}

\tland_forcelimit = 5
\tnaval_forcelimit = 10

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_254_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = waffenqualitat0
\t}

\tland_forcelimit = 10
\tnaval_forcelimit = 20

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_254_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = waffenqualitat0
\t}

\tland_forcelimit = 15
\tnaval_forcelimit = 30

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_254_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = waffenqualitat0
\t}

\tland_forcelimit = 25
\tnaval_forcelimit = 40

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_255 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = festung0
\t}

\tfort_maintenance_modifier = -0.25
\tgarrison_size = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_256 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\tfull_idea_group = kriegsproduktion0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_575
\t\t\thas_active_policy = idea_variation_act_580
\t\t\thas_active_policy = idea_variation_act_623
\t\t\thas_active_policy = idea_variation_act_16
\t\t\thas_active_policy = idea_variation_act_79
\t\t\thas_active_policy = idea_variation_act_90
\t\t\thas_active_policy = idea_variation_act_220
\t\t\thas_active_policy = idea_variation_act_256
\t\t\t}
\t\t}
\t}

\tae_impact = -0.2


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_257 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = justiz0
\t}

\tglobal_ship_cost = -0.15
\tglobal_ship_recruit_speed = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_258 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = diktatur0
\t}

\tnaval_forcelimit_modifier = 0.15
\tnaval_maintenance_modifier = -0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_259 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = staatsverwaltung0
\t}

\tgoverning_capacity = 250

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_260 = {

\tmonarch_power = MIL\t# Marine

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = generalstab0
\t}

\theavy_ship_power = 0.1
\tgalley_power = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_261 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = wehrpflicht0
\t}

\tsailors_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_263 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = stehendesheer0
\t}

\tglobal_sailors_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_264 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = soldnerheer0
\t}

\tnaval_maintenance_modifier = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_265 = {

\tmonarch_power = DIP\t\t# Marine

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = waffenqualitat0
\t}

\theavy_ship_power = 0.075
\tgalley_power = 0.075
\tlight_ship_power = 0.075
\ttransport_power = 0.075

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_266 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = festung0
\t}

\theavy_ship_cost = -0.2

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_267 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas
\t\tfull_idea_group = kriegsproduktion0
\t}

\tglobal_ship_cost = -0.33

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_268 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = gesundheit0
\t}

\tmerchants = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_269 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = staatsverwaltung0
\t}

\tcaravan_power = 0.15
\ttrade_steering = 0.15
\tembargo_efficiency = 0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_270 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = diktatur0
\t}

\ttrade_steering = 0.5

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_271 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = generalstab0
\t}

\tmerchants = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_272 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = wehrpflicht0
\t}

\tglobal_prov_trade_power_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_273 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = stehendesheer0
\t}

\tland_morale = 0.07


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_274 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\tfull_idea_group = festung0
\t}

\ttrade_efficiency = 0.15
\tlight_ship_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_275 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = justiz0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_276 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = entwicklung0
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_277 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = gesundheit0
\t}

\tgarrison_size = 0.5
\tglobal_garrison_growth = 0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_278 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = diktatur0
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_279 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tfull_idea_group = staatsverwaltung0
\t}

\tland_morale = 0.07


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_280 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = diktatur0
\t}

\tland_morale = 0.15
\tdiscipline = -0.05

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_281 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tfull_idea_group = entwicklung0
\t}

\tglobal_regiment_cost = -0.15
\tglobal_regiment_recruit_speed = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_282 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tfull_idea_group = diktatur0
\t}

\tartillery_power = 0.20
\tartillery_cost = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_283 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tfull_idea_group = justiz0
\t}

\tglobal_autonomy = -0.2


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_284 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tfull_idea_group = staatsverwaltung0
\t}

\tglobal_tax_modifier = 0.15
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_285 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tfull_idea_group = justiz0
\t}

\tglobal_missionary_strength = 0.01
\tmissionaries = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_286 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tfull_idea_group = staatsverwaltung0
\t}

\tstate_maintenance_modifier = 0.5
\tgoverning_capacity = 150

\tai_will_do = {
\t\tfactor = 1
\t}
}

#idea_variation_act_287 = {
#
#\tmonarch_power = MIL
#
#\tpotential = {
#\t\thas_idea_group = quantity_ideas
#\t\thas_idea_group = diktatur0
#
#\t}
#\tallow = {
#\t\tfull_idea_group = quantity_ideas
#\t\tfull_idea_group = diktatur0
#\t}
#
#
#
#\tai_will_do = {
#\t\tfactor = 1
#\t}
#}

idea_variation_act_288 = {

\tmonarch_power = ADM\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = expansion_ideas
\t}

\tfire_damage = 0.025
\tshock_damage = 0.025
\tcore_creation = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_289 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = humanist_ideas
\t}

\tarmy_tradition = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_290 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = generalstab0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tfree_leader_pool = 1
\tadvisor_pool = 3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_291 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = generalstab0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tmissionaries = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_292 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = justiz0
\t}

\tlegitimacy = 2
\trepublican_tradition = 0.3
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_293 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = gesundheit0
\t}

\tsailors_recovery_speed = 0.15
\tmanpower_recovery_speed = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_294 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = generalstab0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 10
\tglobal_unrest = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_294_1 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = generalstab0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 20
\tglobal_unrest = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_294_2 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = generalstab0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 30
\tglobal_unrest = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_294_3 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = generalstab0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 40
\tglobal_unrest = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_295 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = generalstab0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\tfull_idea_group = staatsverwaltung0
\t}

\treinforce_speed = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_296 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = economic_ideas
\t}

\tland_maintenance_modifier = -0.2
\tglobal_tax_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_297 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = humanist_ideas
\t}

\tland_maintenance_modifier = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_298 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_299 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = expansion_ideas
\t}

\tglobal_regiment_cost = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_300 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}


\tmissionaries = 1
\tglobal_missionary_strength = 0.02

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_301 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = justiz0
\t}

\tglobal_unrest = -3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_302 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_23
\t\t\thas_active_policy = idea_variation_act_153
\t\t\thas_active_policy = idea_variation_act_169
\t\t\thas_active_policy = idea_variation_act_238
\t\t\thas_active_policy = idea_variation_act_302
\t\t\thas_active_policy = idea_variation_act_340
\t\t\t}
\t\t}

\t}

\tdevelopment_cost = -0.1
\tfort_maintenance_modifier = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_303 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = diktatur0
\t}

\tland_forcelimit = 15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_303_1 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = diktatur0
\t}

\tland_forcelimit = 25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_303_2 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = diktatur0
\t}

\tland_forcelimit = 35

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_303_3 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = diktatur0
\t}

\tland_forcelimit = 40

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_304 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tland_maintenance_modifier = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_305 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = administrative_ideas
\t}

\tmercenary_cost = -0.15
\tmerc_maintenance_modifier = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_306 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tpossible_mercenaries = 0.35
\tmercenary_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_307 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\twar_exhaustion = -0.05
\tglobal_unrest = -2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_308 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = republik0
\t}

\trepublican_tradition = 0.3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_309 = {

\tmonarch_power = MIL\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = diktatur0
\t}

\tpossible_mercenaries = 1.0

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_310 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = justiz0
\t}

\tyearly_corruption = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_311 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = gesundheit0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_312 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tfull_idea_group = entwicklung0
\t}

\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_313 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tmissionaries = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\treligious_unity = 1
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.8 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.6 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.4 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tNOT = { religious_unity = 0.2 }
\t\t}
\t}
}

idea_variation_act_314 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tglobal_manpower_modifier = 0.25


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_315 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = administrative_ideas
\t}

\tglobal_regiment_cost = -0.10
\tglobal_regiment_recruit_speed = -0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_316 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = economic_ideas
\t}

\ttrade_efficiency = 0.1
\tglobal_tax_modifier = 0.1
\tproduction_efficiency = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_317 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = expansion_ideas
\t}

\tyears_of_nationalism = -3
\tyearly_corruption = -0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_318 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = humanist_ideas
\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_319 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_320 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = republik0
\t}

\tinfantry_power = 0.125
\tcavalry_power = 0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_321 = {

\tmonarch_power = ADM\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = justiz0
\t}

\tland_morale = 0.05

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_322 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = entwicklung0
\t}

\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_323 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tglobal_manpower_modifier = 0.125

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_324 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = administrative_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_636
\t\t\thas_active_policy = idea_variation_act_660
\t\t\thas_active_policy = idea_variation_act_12
\t\t\thas_active_policy = idea_variation_act_31
\t\t\thas_active_policy = idea_variation_act_324

\t\t\t}
\t\t}
\t}

\treinforce_speed = 0.1
\tland_attrition = -0.1


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_325 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tartillery_power = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_326 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tleader_land_fire = 1
\tleader_land_shock = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_327 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = expansion_ideas
\t}

\trange = 0.5

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_328 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = humanist_ideas
\t}

\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_329 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_institution_spread = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_330 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = republik0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_331 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = diktatur0
\t}

\tinfantry_power = 0.1
\tcavalry_power = 0.1
\tartillery_power = 0.1
\tglobal_unrest = 3


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_332 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = justiz0
\t}

\tembargo_efficiency = 0.25
\tproduction_efficiency = 0.20

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { production_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_333 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = gesundheit0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_13
\t\t\thas_active_policy = idea_variation_act_578
\t\t\thas_active_policy = idea_variation_act_206
\t\t\thas_active_policy = idea_variation_act_219
\t\t\thas_active_policy = idea_variation_act_227
\t\t\thas_active_policy = idea_variation_act_333
\t\t\thas_active_policy = idea_variation_act_498

\t\t\t}
\t\t}
\t}

\tidea_cost = -0.075

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_334 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\tfull_idea_group = staatsverwaltung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\tinterest = -2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_335 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_tax_modifier = 0.2
\tfort_maintenance_modifier = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_336 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = expansion_ideas
\t}

\tshock_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_337 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = humanist_ideas
\t}

\tshock_damage_received = -0.05
\tfire_damage_received = -0.05


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_338 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}

idea_variation_act_339 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = justiz0
\t}

\tglobal_garrison_growth = 0.2
\tglobal_manpower_modifier = 0.2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_340 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_23
\t\t\thas_active_policy = idea_variation_act_153
\t\t\thas_active_policy = idea_variation_act_169
\t\t\thas_active_policy = idea_variation_act_238
\t\t\thas_active_policy = idea_variation_act_302
\t\t\thas_active_policy = idea_variation_act_340
\t\t\t}
\t\t}
\t}

\tfort_maintenance_modifier = -0.1
\tdevelopment_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_341 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = diktatur0
\t}

\tdefensiveness = 0.33
\tglobal_unrest = 3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_342 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = festung0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tstate_maintenance_modifier = -0.5
\tyearly_corruption = -0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_343 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = expansion_ideas
\t}

\tglobal_trade_goods_size_modifier = 0.1
\tproduction_efficiency = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_344 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\ttolerance_heathen = 2
\ttolerance_heretic = 2

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_345 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tglobal_own_trade_power = 0.3

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_346 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = humanist_ideas
\t}

\tglobal_regiment_cost = -0.15
\tglobal_regiment_recruit_speed = -0.3

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_347 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tproduction_efficiency = 0.1
\tglobal_trade_goods_size_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_348 = {

\tmonarch_power = MIL\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_trade_goods_size_modifier = 0.25
\tglobal_unrest = 3
\tglobal_autonomy = 0.05

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_349 = {

\tmonarch_power = MIL\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = republik0
\t}

\tglobal_trade_goods_size_modifier = 0.2
\tglobal_tax_modifier = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { trade_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttrade_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_350 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = gesundheit0
\t}

\tmanpower_recovery_speed = 0.15
\tsailors_recovery_speed = 0.15

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_351 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = entwicklung0
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_262 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = republik0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = quality_ideas
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 5
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tis_at_war = yes
\t\t}
\t}
}


idea_variation_act_352 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = republik0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = quantity_ideas
\t}

\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_353 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = republik0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = offensive_ideas
\t}

\treinforce_speed = 0.1
\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_354 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = republik0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = defensive_ideas
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_355 = {

monarch_power = DIP

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tglobal_sailors_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_356 = {

monarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tnaval_attrition = -0.5

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_357 = {

monarch_power = ADM

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tglobal_ship_cost = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_358 = {

monarch_power = DIP

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tnaval_forcelimit_modifier = 0.33

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_359 = {

monarch_power = ADM

\t\tpotential = {

\t\tOR = {
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\thas_idea_group = handel0

\t\t}

\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tOR = {
\t\t\tfull_idea_group = galle0
\t\t\tfull_idea_group = gross0
\t\t\tfull_idea_group = handel0
\t\t\t}
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tlegitimacy = 2
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1
\t}
}


idea_variation_act_360 = {

monarch_power = DIP

\t\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tprivateer_efficiency = 1
\tnaval_maintenance_modifier = -0.25

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_361 = {

monarch_power = DIP

\t\tpotential = {
\t\thas_idea_group = justiz0
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tnaval_morale = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_362 = {

monarch_power = DIP

\t\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\tOR = {
\t\thas_idea_group = handel0
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tOR = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = galle0
\t\tfull_idea_group = gross0
\t\t}
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_363 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = handel0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = handel0
\t\tfull_idea_group = offensive_ideas
\t}

\tsiege_blockade_progress = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_364 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gross0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = gross0
\t\tfull_idea_group = offensive_ideas
\t}

\theavy_ship_power = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_365 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gross0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = gross0
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_tax_modifier = 0.2
\theavy_ship_cost = -0.1


\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0.75
\t\t\tNOT = { tax_income_percentage = 0.25 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.45
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\ttax_income_percentage = 0.7
\t\t}
\t}
}

idea_variation_act_366 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gross0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = gross0
\t\tfull_idea_group = republik0
\t}

\tnavy_tradition = 2
\trepublican_tradition = 0.3


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_367 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gross0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = gross0
\t\tfull_idea_group = diktatur0
\t}

\tnavy_tradition = 2
\tprestige = 1


\tai_will_do = {
\t\tfactor = 1
\t}
}

idea_variation_act_368 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = galle0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = galle0
\t\tfull_idea_group = economic_ideas
\t}

\tproduction_efficiency = 0.20
\tgalley_cost = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { production_income_percentage = 0.1 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.2
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.3
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.4
\t\t}
\t\tmodifier = {
\t\t\tfactor = 1.5
\t\t\tproduction_income_percentage = 0.5
\t\t}
\t}
}

idea_variation_act_369 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = galle0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = galle0
\t\tfull_idea_group = republik0
\t}

\tnavy_tradition = 1
\tnaval_forcelimit = 10

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_369_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = galle0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = galle0
\t\tfull_idea_group = republik0
\t}

\tnavy_tradition = 1
\tnaval_forcelimit = 20

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_369_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = galle0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = galle0
\t\tfull_idea_group = republik0
\t}

\tnavy_tradition = 1
\tnaval_forcelimit = 30

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_369_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = galle0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = galle0
\t\tfull_idea_group = republik0
\t}

\tnavy_tradition = 1
\tnaval_forcelimit = 40

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_370 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = galle0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = galle0
\t\tfull_idea_group = diktatur0
\t}

\tgalley_power = 0.25\t\t\t\t# Marine
\tnaval_morale = -0.1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_371 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = gross0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = gross0
\t\tfull_idea_group = festung0
\t}

\theavy_ship_power = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}


idea_variation_act_372 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = galle0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = galle0
\t\tfull_idea_group = festung0
\t}

\tgalley_power = 0.075\t\t\t\t# Marine
\tcapture_ship_chance = 0.075

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_373 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = militarismus0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_manpower = 10.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_373_1 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = militarismus0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_manpower = 20.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_373_2 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = militarismus0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_manpower = 30.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_373_3 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = militarismus0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tglobal_manpower = 40.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_374 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = economic_ideas
\t}

\tinfantry_power = 0.075
\tcavalry_power = 0.075
\tartillery_power = 0.075

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_375 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = expansion_ideas
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_376 = {

\tmonarch_power = ADM\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = administrative_ideas
\t}

\tland_morale = 0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_377 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = humanist_ideas
\t}

\tfire_damage = 0.05
\tshock_damage = 0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_378 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = militarismus0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tmissionaries = 1
\tglobal_unrest = -1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_379 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = justiz0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_380 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = entwicklung0
\t}

\tfort_maintenance_modifier = -0.1
\tland_maintenance_modifier = -0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_381 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = gesundheit0
\t}

\tglobal_trade_goods_size_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_382 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tland_morale = 0.05
\tshock_damage = 0.025

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_383 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = republik0
\t}

\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_384 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = militarismus0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 5.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_384_1 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = militarismus0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 10.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_384_2 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = militarismus0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 15.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_384_3 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = militarismus0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 20.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_385 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tleader_land_fire = 1
\tshock_damage_received = -0.025

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_386 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = spy_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = spy_ideas
\t}

\tglobal_spy_defence = 0.35

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_387 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = dynasty0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = dynasty0
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_388 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = influence_ideas
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_389 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = trade_ideas
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_390 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = exploration_ideas
\t}

\tglobal_colonial_growth = 35
\tnative_uprising_chance = 0.5

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_391 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = maritime_ideas
\t}

\tnaval_morale = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_392 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = gross0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = gross0
\t}

\theavy_ship_power = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_393 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = galle0
\t}

\tgalley_power = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_394 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = handel0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = handel0
\t}

\tlight_ship_power = 0.15\t\t\t\t# Marine
\ttransport_power = 0.15
\tprivateer_efficiency = 1.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_395 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = kolonialimperium0
\t}

\tinfantry_power = 0.075
\tglobal_manpower_modifier = 0.1


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_396 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = assimilation0
\t}

\tglobal_manpower_modifier = 0.125

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_397 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = gesellschaft0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\tinterest = -1
\tinflation_reduction = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_398 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = propaganda0
\t}

\twar_exhaustion = -0.03

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_399 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = flottenbasis0
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_400 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = militarismus0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tfull_idea_group = nationalismus0
\t}

\tlegitimacy = 2
\trepublican_tradition = 0.3
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_401 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = militarismus0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}



\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tglobal_autonomy = -0.05
\timperial_authority = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_402 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tmanpower_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_403 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = economic_ideas
\t}

\tglobal_institution_spread = 0.1
\tembracement_cost = -0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_404 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = expansion_ideas
\t}

\tmovement_speed = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_405 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = administrative_ideas
\t}

\tshock_damage_received = -0.05
\tfire_damage_received = -0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_406 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = humanist_ideas
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_407 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_408 = {

\tmonarch_power = ADM\t\t\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = justiz0
\t}

\tland_morale = 0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_409 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = entwicklung0
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_410 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = gesundheit0
\t}

\tmanpower_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_411 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tinfantry_power = 0.075
\tshock_damage = 0.075

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_412 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = formation0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = formation0
\t\tfull_idea_group = republik0
\t}

\tland_forcelimit = 15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_412_1 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = formation0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = formation0
\t\tfull_idea_group = republik0
\t}

\tland_forcelimit = 25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_412_2 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = formation0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = formation0
\t\tfull_idea_group = republik0
\t}

\tland_forcelimit = 35

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_412_3 = {

\tmonarch_power = ADM

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = formation0
\t\thas_idea_group = republik0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = formation0
\t\tfull_idea_group = republik0
\t}

\tland_forcelimit = 40

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_413 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = formation0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = formation0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 10.0
\tshock_damage_received = 0.2
\tshock_damage = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_413_1 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = formation0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = formation0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 20.0
\tshock_damage_received = 0.2
\tshock_damage = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_413_2 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = formation0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = formation0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 30.0
\tshock_damage_received = 0.2
\tshock_damage = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_413_3 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = formation0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = formation0
\t\tfull_idea_group = diktatur0
\t}

\tglobal_manpower = 40.0
\tshock_damage_received = 0.2
\tshock_damage = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_414 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tfire_damage = 0.05
\tfire_damage_received = -0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_415 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = spy_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = spy_ideas
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_416 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = dynasty0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = dynasty0
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_417 = {

\tmonarch_power = DIP\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = influence_ideas
\t}

\tland_morale = 0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_418 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = trade_ideas
\t}

\tshock_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_419 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = exploration_ideas
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_420 = {

\tmonarch_power = DIP\t\t\t\t# Marine

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = maritime_ideas
\t}

\tgalley_power = 0.075
\theavy_ship_power = 0.075
\tlight_ship_power = 0.075
\ttransport_power = 0.075

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_421 = {

\tmonarch_power = DIP\t\t\t\t# Marine

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = gross0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = gross0
\t}

\tnavy_tradition = 1
\tnaval_morale = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_422 = {

\tmonarch_power = DIP\t\t\t\t# Marine

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = galle0
\t}

\tgalley_power = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_423 = {

\tmonarch_power = DIP\t\t\t\t# Marine

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = handel0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = handel0
\t}

\theavy_ship_power = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_424 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = kolonialimperium0
\t}

\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_425 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = assimilation0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_588
\t\t\thas_active_policy = idea_variation_act_591
\t\t\thas_active_policy = idea_variation_act_21
\t\t\thas_active_policy = idea_variation_act_138
\t\t\thas_active_policy = idea_variation_act_425
\t\t\thas_active_policy = idea_variation_act_502
\t\t\thas_active_policy = idea_variation_act_551

\t\t\t}
\t\t}
\t}

\tbuild_cost = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_426 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = gesellschaft0
\t}

\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_427 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = propaganda0
\t}

\tglobal_unrest = -3

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_428 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = flottenbasis0
\t}


\tnaval_morale = 0.1
\tnaval_forcelimit_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_429 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = formation0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tfull_idea_group = nationalismus0
\t}

\tenemy_core_creation = 0.5

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_430 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = formation0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tnum_accepted_cultures = 1
\ttrade_steering = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_431 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tmercenary_discipline = 0.05


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_432 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tglobal_own_trade_power = 0.2
\tembargo_efficiency = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_433 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = quality_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tlegitimacy = 2
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_434 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\tOR = {
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\tOR = {
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tland_morale = 0.05
\tinfantry_cost = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_435 = {

\tmonarch_power = DIP

\tpotential = {

\t\tOR = {
\t\thas_idea_group = galle0
\t\thas_idea_group = gross0
\t\t}
\t\thas_idea_group = quality_ideas


\t}
\tallow = {
\t\tOR = {
\t\t\tfull_idea_group = galle0
\t\t\tfull_idea_group = gross0
\t\t\t}

\t\t\tfull_idea_group = quality_ideas


\t}


\tnaval_morale = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}


idea_variation_act_436 = {

\tmonarch_power = MIL

\tpotential = {

\t\tOR = {
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\t}
\t\thas_idea_group = generalstab0


\t}
\tallow = {
\t\tOR = {
\t\t\tfull_idea_group = galle0
\t\t\tfull_idea_group = handel0
\t\t\t}

\t\t\tfull_idea_group = generalstab0


\t}

\tleader_naval_manuever = 1\t\t\t\t# Marine
\tleader_naval_shock = 1

\tai_will_do = {
\t\tfactor = 1
\t\tmodifier = {
\t\t\tfactor = 0
\t\t\tNOT = { navy_size = 10 }
\t\t}
\t\tmodifier = {
\t\t\tfactor = 0.6
\t\t\tNOT = { navy_size = 20 }
\t\t}
\t}
}

idea_variation_act_437 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\tfull_idea_group = propaganda0
\t}

\ttrade_efficiency = 0.1
\tglobal_trade_goods_size_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_438 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tshock_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_439 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_440 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tcore_creation = -0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_441 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = spy_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = spy_ideas
\t}

\tcav_to_inf_ratio = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_442 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = dynasty0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = dynasty0
\t}

\tshock_damage = 0.075
\tleader_siege = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_443 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = influence_ideas
\t}


\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_444 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = trade_ideas
\t}

\tembargo_efficiency = 0.25
\tglobal_foreign_trade_power = 0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_445 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = economic_ideas
\t}

\tshock_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_446 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = exploration_ideas
\t}


\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_447 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = maritime_ideas
\t}

\theavy_ship_power = 0.075
\tgalley_power = 0.075\t\t\t\t# Marine
\tlight_ship_power = 0.075
\ttransport_power = 0.075

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_448 = {

\tmonarch_power = ADM\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = expansion_ideas
\t}

\tdiplomatic_annexation_cost = -0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_449 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = administrative_ideas
\t}

\tglobal_missionary_strength = 0.03

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_450 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = humanist_ideas
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_451 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = justiz0
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_452 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = entwicklung0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_idea = organised_construction
\t\t\thas_idea = zentra1
\t\t\t}
\t\t}
\t}

\tbuild_time = -0.5

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_453 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = gesundheit0
\t}

\tglobal_unrest = -3

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_454 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = diktatur0
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_455 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = gross0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = gross0
\t}

\theavy_ship_power = 0.15\t\t\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_456 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = handel0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = handel0
\t}

\tlight_ship_power = 0.2\t\t\t\t\t\t# Marine
\ttransport_power = 0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_457 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = galle0
\t}

\tgalley_power = 0.15\t\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_458 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = kolonialimperium0
\t}

\treduced_liberty_desire = 10

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_459 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = assimilation0
\t}

\tcavalry_power = 0.1
\tcav_to_inf_ratio = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_460 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = gesellschaft0
\t}

\tculture_conversion_cost = -0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_461 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = shock0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = shock0
\t\tfull_idea_group = propaganda0
\t}

\tglobal_manpower = 10.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_461_1 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = shock0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = shock0
\t\tfull_idea_group = propaganda0
\t}

\tglobal_manpower = 20.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_461_2 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = shock0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = shock0
\t\tfull_idea_group = propaganda0
\t}

\tglobal_manpower = 30.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_461_3 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = shock0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = shock0
\t\tfull_idea_group = propaganda0
\t}

\tglobal_manpower = 40.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_462 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = shock0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = shock0
\t\tfull_idea_group = flottenbasis0
\t}

\tglobal_sailors = 2500
\tnaval_forcelimit = 10

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_462_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = shock0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = shock0
\t\tfull_idea_group = flottenbasis0
\t}

\tglobal_sailors = 5000
\tnaval_forcelimit = 20

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_462_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = shock0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = shock0
\t\tfull_idea_group = flottenbasis0
\t}

\tglobal_sailors = 7500
\tnaval_forcelimit = 30

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_462_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = shock0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = shock0
\t\tfull_idea_group = flottenbasis0
\t}

\tglobal_sailors = 10000
\tnaval_forcelimit = 40

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_463 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = nationalismus0
\t}

\tshock_damage = 0.05
\tshock_damage_received = -0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_464 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = shock0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = shock0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tglobal_sailors = 5000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_464_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = shock0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = shock0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tglobal_sailors = 10000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_464_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = shock0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = shock0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tglobal_sailors = 15000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_464_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = shock0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = shock0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tglobal_sailors = 20000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_465 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = staatsverwaltung0
\t}

\tglobal_trade_goods_size_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_466 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\thas_idea_group = zentra0

\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\tfull_idea_group = zentra0
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_467 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = shock0
\t\thas_idea_group = dezentra0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = shock0
\t\tfull_idea_group = dezentra0
\t}

\tglobal_manpower = 7.5
\tglobal_manpower_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_467_1 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = shock0
\t\thas_idea_group = dezentra0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = shock0
\t\tfull_idea_group = dezentra0
\t}

\tglobal_manpower = 15
\tglobal_manpower_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_467_2 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = shock0
\t\thas_idea_group = dezentra0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = shock0
\t\tfull_idea_group = dezentra0
\t}

\tglobal_manpower = 22.5
\tglobal_manpower_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_467_3 = {

\tmonarch_power = MIL

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = shock0
\t\thas_idea_group = dezentra0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = shock0
\t\tfull_idea_group = dezentra0
\t}

\tglobal_manpower = 30
\tglobal_manpower_modifier = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_468 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\tOR = {
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = islam0
\t\thas_idea_group = cathar0
\t\thas_idea_group = shinto0
\t\thas_idea_group = norse0
\t\thas_idea_group = budda0
\t\thas_idea_group = confuci0
\t\thas_idea_group = hindu0
\t\thas_idea_group = tengri0
\t\thas_idea_group = coptic0
\t\thas_idea_group = helle0
\t\thas_idea_group = slav0
\t\thas_idea_group = jew0
\t\thas_idea_group = suomi0
\t\thas_idea_group = romuva0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = mane0
\t\thas_idea_group = ancli0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = nahu0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tOR = {
\t\t\tfull_idea_group = religious_ideas
\t\t\tfull_idea_group = katholisch0
\t\t\tfull_idea_group = protestant0
\t\t\tfull_idea_group = reformiert0
\t\t\tfull_idea_group = orthodox0
\t\t\tfull_idea_group = islam0
\t\t\tfull_idea_group = cathar0
\t\t\tfull_idea_group = shinto0
\t\t\tfull_idea_group = norse0
\t\t\tfull_idea_group = budda0
\t\t\tfull_idea_group = confuci0
\t\t\tfull_idea_group = hindu0
\t\t\tfull_idea_group = tengri0
\t\t\tfull_idea_group = coptic0
\t\t\tfull_idea_group = helle0
\t\t\tfull_idea_group = slav0
\t\t\tfull_idea_group = jew0
\t\t\tfull_idea_group = suomi0
\t\t\tfull_idea_group = romuva0
\t\t\tfull_idea_group = animist0
\t\t\tfull_idea_group = feti0
\t\t\tfull_idea_group = zoro0
\t\t\tfull_idea_group = mane0
\t\t\tfull_idea_group = ancli0
\t\t\tfull_idea_group = mesoam0
\t\t\tfull_idea_group = inti0
\t\t\tfull_idea_group = tote0
\t\t\tfull_idea_group = nahu0
\t\t}
\t}

\tlegitimacy = 2
\trepublican_tradition = 0.3
\tdevotion = 1
\thorde_unity = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_469 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\tOR = {
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = horde0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tOR = {
\t\tfull_idea_group = republik0
\t\tfull_idea_group = aristo0
\t\tfull_idea_group = monarchie0
\t\tfull_idea_group = horde0
\t\t}
\t}

\tartillery_cost = -0.2
\tinfantry_cost = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_470 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = innovativeness_ideas
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_471 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = spy_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = spy_ideas
\t}

\tdiplomatic_reputation = 1
\tdiplomatic_upkeep = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_472 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = dynasty0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = dynasty0
\t}

\tmanpower_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_473 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = influence_ideas
\t}

\tshock_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_474 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = trade_ideas
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_475 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = economic_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = economic_ideas
\t}

\tproduction_efficiency = 0.3

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_476 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = exploration_ideas
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_477 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = maritime_ideas
\t}

\theavy_ship_power = 0.075
\tgalley_power = 0.075\t\t\t\t# Marine
\tlight_ship_power = 0.075
\ttransport_power = 0.075

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_478 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = expansion_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = expansion_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_479 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = administrative_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = administrative_ideas
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_480 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = humanist_ideas

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = humanist_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_481 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = justiz0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = justiz0
\t}

\tprovince_warscore_cost = -0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_482 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = entwicklung0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = entwicklung0
\t}

\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_483 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = gesundheit0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = gesundheit0
\t}

\treinforce_speed = 0.15
\tmanpower_recovery_speed = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_484 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = diktatur0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = diktatur0
\t}

\treinforce_speed = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_485 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = gross0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = gross0
\t}

\theavy_ship_power = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_486 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = handel0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = handel0
\t}

\tlight_ship_power = 0.3\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_487 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = galle0
\t}

\tgalley_power = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_488 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = kolonialimperium0
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_489 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = assimilation0
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_490 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = gesellschaft0
\t}

\tyearly_absolutism = 1.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_491 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = propaganda0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\timprove_relation_modifier = 0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_492 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = flottenbasis0
\t}

\tfire_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_493 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = nationalismus0
\t}

\tland_maintenance_modifier = -0.2


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_494 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tprestige = 2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_495 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = staatsverwaltung0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = staatsverwaltung0
\t}

\ttrade_efficiency = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_496 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = zentra0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = zentra0
\t}

\tglobal_trade_goods_size_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_497 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\thas_idea_group = dezentra0

\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\tfull_idea_group = dezentra0
\t}

\tfire_damage_received = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}


idea_variation_act_498 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = spy_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = spy_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_13
\t\t\thas_active_policy = idea_variation_act_578
\t\t\thas_active_policy = idea_variation_act_206
\t\t\thas_active_policy = idea_variation_act_219
\t\t\thas_active_policy = idea_variation_act_227
\t\t\thas_active_policy = idea_variation_act_333
\t\t\thas_active_policy = idea_variation_act_498

\t\t\t}
\t\t}
\t}

\tidea_cost = -0.075

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_499 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = dynasty0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = dynasty0
\t}

\tdiplomats = 1
\tdiplomatic_upkeep = 1


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_500 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = influence_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 2
\t\t\thas_active_policy = idea_variation_act_611
\t\t\thas_active_policy = idea_variation_act_617
\t\t\thas_active_policy = idea_variation_act_620
\t\t\thas_active_policy = idea_variation_act_50
\t\t\thas_active_policy = idea_variation_act_152
\t\t\thas_active_policy = idea_variation_act_215
\t\t\thas_active_policy = idea_variation_act_491
\t\t\thas_active_policy = idea_variation_act_500

\t\t\t}
\t\t}
\t}

\timprove_relation_modifier = 0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_501 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = offensive_ideas
\t}

\tland_morale = 0.05
\tartillery_power = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_502 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = defensive_ideas

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_588
\t\t\thas_active_policy = idea_variation_act_591
\t\t\thas_active_policy = idea_variation_act_21
\t\t\thas_active_policy = idea_variation_act_138
\t\t\thas_active_policy = idea_variation_act_425
\t\t\thas_active_policy = idea_variation_act_502
\t\t\thas_active_policy = idea_variation_act_551

\t\t\t}
\t\t}
\t}

\tbuild_cost = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_503 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = trade_ideas
\t}

\tglobal_own_trade_power = 0.3

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_504 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = exploration_ideas
\t}

\tcolonists = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_505 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = maritime_ideas
\t}

\tnaval_forcelimit_modifier = 0.1
\tnaval_maintenance_modifier = -0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_506 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = quality_ideas
\t}

\tleader_naval_manuever = 2\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_507 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = quantity_ideas
\t}

\tdiscipline = 0.03

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_508 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = gross0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = gross0
\t}

\tnaval_forcelimit_modifier = 0.15
\tglobal_sailors_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_509 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = handel0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = handel0
\t}

\tnaval_forcelimit_modifier = 0.33


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_510 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_discovery
\t\thas_idea_group = zentra0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tcurrent_age = age_of_discovery
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = galle0
\t}

\tnaval_forcelimit = 10
\tglobal_sailors = 1000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_510_1 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_reformation
\t\thas_idea_group = zentra0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tcurrent_age = age_of_reformation
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = galle0
\t}

\tnaval_forcelimit = 20
\tglobal_sailors = 2000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_510_2 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_absolutism
\t\thas_idea_group = zentra0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tcurrent_age = age_of_absolutism
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = galle0
\t}

\tnaval_forcelimit = 30
\tglobal_sailors = 3000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_510_3 = {

\tmonarch_power = DIP

\tpotential = {
\t\tcurrent_age = age_of_revolutions
\t\thas_idea_group = zentra0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tcurrent_age = age_of_revolutions
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = galle0
\t}

\tnaval_forcelimit = 40
\tglobal_sailors = 4000

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_511 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = kolonialimperium0
\t}

\tglobal_tariffs = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_512 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = assimilation0
\t}

\tglobal_colonial_growth = 15
\tculture_conversion_cost = -0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_513 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = gesellschaft0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_105
\t\t\thas_active_policy = idea_variation_act_144
\t\t\thas_active_policy = idea_variation_act_214
\t\t\thas_active_policy = idea_variation_act_229
\t\t\thas_active_policy = idea_variation_act_248
\t\t\thas_active_policy = idea_variation_act_334
\t\t\thas_active_policy = idea_variation_act_397
\t\t\thas_active_policy = idea_variation_act_513
\t\t\t}
\t\t}
\t}

\tinterest = -2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_514 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = propaganda0
\t}

\tgoverning_capacity = 250

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_515 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = flottenbasis0
\t}

\trange = 0.5


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_516 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tgoverning_capacity = 250

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_517 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = nationalismus0
\t}

\tglobal_tax_modifier = 0.3

\tai_will_do = {
\t\tfactor = 1

\t}
}


idea_variation_act_518 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = stehendesheer0
\t}

\tland_forcelimit_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_519 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = generalstab0
\t}

\tland_maintenance_modifier = -0.1
\tnaval_maintenance_modifier = -0.1
\tfort_maintenance_modifier = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_520 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = soldnerheer0
\t}

\tpossible_mercenaries = 0.5


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_521 = {

\tmonarch_power = MIL\t\t\t\t# Besonderer Fall

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = wehrpflicht0
\t}

\tmanpower_recovery_speed = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_522 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = waffenqualitat0
\t}

\tsiege_ability = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_523 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = festung0
\t}

\tdefensiveness = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_524 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tfire_damage = 0.05
\tshock_damage = 0.05

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_525 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = formation0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = formation0
\t}

\tdiplomats = 1
\tdiplomatic_reputation = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_526 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\thas_idea_group = militarismus0

\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\tfull_idea_group = militarismus0
\t}

\tarmy_tradition = 1
\tarmy_tradition_decay = -0.01

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_527 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = spy_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = spy_ideas
\t}

\tprovince_warscore_cost = -0.2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_528 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = dynasty0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = dynasty0
\t}

\tdiplomatic_upkeep = 2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_529 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = influence_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = influence_ideas
\t}

\tdiplomatic_reputation = 2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_530 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = offensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = offensive_ideas
\t}

\tadvisor_pool = 2
\timperial_authority_value = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_531 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = defensive_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = defensive_ideas
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_532 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = trade_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = trade_ideas
\t}

\tglobal_foreign_trade_power = 0.3

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_533 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = exploration_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = exploration_ideas
\t}

\tcolonists = 1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_534 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = maritime_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = maritime_ideas
\t}

\tnavy_tradition = 2

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_535 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = quality_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = quality_ideas
\t}

\tinfantry_power = 0.1
\tcavalry_power = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_536 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = quantity_ideas

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = quantity_ideas
\t}

\tglobal_manpower_modifier = 0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_537 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = gross0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = gross0
\t}

\tnaval_morale = 0.15\t\t\t\t# Marine

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_538 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = handel0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = handel0
\t}

\theavy_ship_power = 0.075
\tgalley_power = 0.075\t\t\t\t# Marine
\tlight_ship_power = 0.075
\ttransport_power = 0.075

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_539 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = galle0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = galle0
\t}

\tnaval_morale = 0.15\t\t\t\t# Marine


\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_540 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = kolonialimperium0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = kolonialimperium0
\t}

\trange = 0.5

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_541 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = assimilation0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = assimilation0
\t}

\tnum_accepted_cultures = 1
\tculture_conversion_cost = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_542 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = gesellschaft0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = gesellschaft0
\t}

\treduced_liberty_desire = 10

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_543 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = propaganda0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = propaganda0
\t}

\tyearly_absolutism = 1.0

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_544 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = flottenbasis0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = flottenbasis0
\t}

\trange = 0.5

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_545 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\tOR = {
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\t}

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tOR = {
\t\tfull_idea_group = imperialismus0
\t\tfull_idea_group = konigreich0
\t\t}
\t}

\tglobal_tax_modifier = 0.15
\tproduction_efficiency = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_546 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = nationalismus0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = nationalismus0
\t}

\tenemy_core_creation = 0.5

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_547 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = stehendesheer0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = stehendesheer0
\t}

\tland_forcelimit_modifier = 0.1
\tland_maintenance_modifier = -0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_548 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = generalstab0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = generalstab0
\t}

\tglobal_manpower_modifier = 0.125

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_549 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = soldnerheer0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = soldnerheer0
\t}

\tpossible_mercenaries = 0.25
\twar_exhaustion_cost = -0.25

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_550 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = wehrpflicht0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = wehrpflicht0
\t}

\tland_morale = 0.07

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_551 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = waffenqualitat0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = waffenqualitat0

\t\tNOT = {
\t\tcalc_true_if = {
\t\t\tamount = 3
\t\t\thas_active_policy = idea_variation_act_588
\t\t\thas_active_policy = idea_variation_act_591
\t\t\thas_active_policy = idea_variation_act_21
\t\t\thas_active_policy = idea_variation_act_138
\t\t\thas_active_policy = idea_variation_act_425
\t\t\thas_active_policy = idea_variation_act_502
\t\t\thas_active_policy = idea_variation_act_551

\t\t\t}
\t\t}
\t}

\tbuild_cost = -0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_552 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = festung0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = festung0
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_553 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = kriegsproduktion0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = kriegsproduktion0
\t}

\tglobal_trade_goods_size_modifier = 0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_554 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = formation0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = formation0
\t}

\tshock_damage = 0.1

\tai_will_do = {
\t\tfactor = 1

\t}
}

idea_variation_act_555 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0
\t\thas_idea_group = militarismus0

\t}
\tallow = {
\t\tfull_idea_group = dezentra0
\t\tfull_idea_group = militarismus0
\t}

\tadvisor_cost = -0.15

\tai_will_do = {
\t\tfactor = 1

\t}
}

###############################################################
#### Idea Variation Policies 2 by flogi
###############################################################


basic_idea_variation_act_1 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = katholisch0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = katholisch0
\t\t
\t\thidden_trigger = {
\t\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\tpapal_influence = 3
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_2 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = protestant0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = protestant0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\tchurch_power_modifier = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_3 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = reformiert0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = reformiert0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\t
\tmonthly_fervor_increase = 3
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_4 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = islam0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = islam0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t\tNOT = { has_active_policy = basic_idea_variation_act_5 }
\t}
\t
\tmonthly_piety = -0.005
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_5 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = islam0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = islam0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t\tNOT = { has_active_policy = basic_idea_variation_act_4 }
\t}
\t
\tmonthly_piety = 0.005
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}


basic_idea_variation_act_6 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = confuci0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = confuci0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tharmonization_speed = 0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_7 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = budda0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = budda0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t\tNOT = { has_active_policy = basic_idea_variation_act_7_2 }
\t}
\t
\tmonthly_karma = -0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_7_2 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = budda0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = budda0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t\tNOT = { has_active_policy = basic_idea_variation_act_7 }
\t}
\t
\tmonthly_karma = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}


basic_idea_variation_act_8 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = cathar0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = cathar0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\t#female_advisor_chance = 0.25
\tcb_on_religious_enemies = yes
\tadvisor_cost = -0.1
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_9 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = ancli0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = ancli0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tinnovativeness_gain = 0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_10 = {

\tmonarch_power = ADM

\tpotential = {
\t
\t\tOR = {
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\t}
\t\t
\t\t\t
\t}
\tallow = {
\t\tOR = {
\t\tfull_idea_group = orthodox0
\t\tfull_idea_group = tengri0
\t\tfull_idea_group = norse0
\t\tfull_idea_group = shinto0
\t\tfull_idea_group = coptic0
\t\tfull_idea_group = romuva0
\t\tfull_idea_group = suomi0
\t\tfull_idea_group = jew0
\t\tfull_idea_group = slav0
\t\tfull_idea_group = helle0 
\t\tfull_idea_group = mane0
\t\tfull_idea_group = animist0
\t\tfull_idea_group = feti0
\t\tfull_idea_group = zoro0
\t\tfull_idea_group = nahu0
\t\tfull_idea_group = mesoam0
\t\tfull_idea_group = inti0
\t\tfull_idea_group = tote0
\t\tfull_idea_group = religious_ideas
\t\tfull_idea_group = hindu0
\t\t}
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tprestige_per_development_from_conversion = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_11 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = entwicklung0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = entwicklung0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tbuild_time = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_12 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = justiz0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = justiz0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tinflation_action_cost = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_13 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = gesundheit0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = gesundheit0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\twar_exhaustion_cost = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_14 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = monarchie0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = monarchie0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tglobal_autonomy = -0.05
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_15 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = republik0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = republik0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\twar_taxes_cost_modifier = -0.2 
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_16 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = aristo0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = aristo0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tdevotion = 1
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_17 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = diktatur0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = diktatur0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tautonomy_change_time = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_18 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = horde0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = horde0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\traze_power_gain = 0.2
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_19 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gross0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = gross0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tartillery_bonus_vs_fort = 1
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_20 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = galle0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = galle0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tsiege_ability = 0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_21 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = handel0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = handel0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tsiege_blockade_progress = 1
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_22 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = kolonialimperium0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = kolonialimperium0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tnative_assimilation = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_23 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = assimilation0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = assimilation0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\treduced_liberty_desire = 10
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_24 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = gesellschaft0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = gesellschaft0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tinstitution_spread_from_true_faith = 0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_25 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = propaganda0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = propaganda0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tclaim_duration = 1.0
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_26 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = flottenbasis0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = flottenbasis0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\trange = 0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_27 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = nationalismus0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = nationalismus0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tyears_of_nationalism = -5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_28 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = konigreich0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = konigreich0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\trival_border_fort_maintenance = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_29 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = imperialismus0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = imperialismus0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tcore_decay_on_your_own = -0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_30 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = generalstab0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = generalstab0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tdrill_gain_modifier = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_31 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = stehendesheer0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = stehendesheer0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\t# global_regiment_recruit_speed = -0.25
\t# manpower_recovery_speed = 0.25 
\tyearly_army_professionalism = 0.010
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_32 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = soldnerheer0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = soldnerheer0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\t# privateer_efficiency = 0.25
\trebel_support_efficiency = 0.50
\t
\tai_will_do = {
\t\tfactor = 1\t
\t}
}

basic_idea_variation_act_33 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = wehrpflicht0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = wehrpflicht0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tland_maintenance_modifier = -0.1\t
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_34 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = waffenqualitat0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = waffenqualitat0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tartillery_cost = -0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_35 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = festung0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = festung0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tfort_maintenance_modifier = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_36 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = kriegsproduktion0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = kriegsproduktion0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tglobal_regiment_cost = -0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_37 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = staatsverwaltung0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = staatsverwaltung0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tstability_cost_modifier = -0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_38 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = zentra0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = zentra0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tculture_conversion_cost = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_39 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = dezentra0 
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = dezentra0 
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tembracement_cost = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_40 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = formation0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = formation0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\trecover_army_morale_speed = 0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_41 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = militarismus0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = militarismus0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tharsh_treatment_cost = -0.1
\tmonthly_militarized_society = 0.1
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_42 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = shock0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = shock0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tcavalry_cost = -0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_43 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = fire0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = fire0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tartillery_cost = -0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_44 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = innovativeness_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = innovativeness_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tglobal_spy_defence = 0.35
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_45 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = spy_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = spy_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tspy_offence = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_46 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = dynasty0
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = dynasty0
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\their_chance = 1.0
\tprestige_decay = -0.01
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_47 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = influence_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = influence_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tvassal_income = 1.0
\treduced_liberty_desire = -25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_48 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = offensive_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = offensive_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tcavalry_cost = -0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_49 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = defensive_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = defensive_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tinfantry_cost = -0.15\t
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_50 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = trade_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = trade_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tembargo_efficiency = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_51 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = economic_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = economic_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tinflation_action_cost = -0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}


basic_idea_variation_act_52 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = exploration_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = exploration_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tnative_assimilation = 0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}


basic_idea_variation_act_53 = {

\tmonarch_power = DIP

\tpotential = {
\t\thas_idea_group = maritime_ideas 
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = maritime_ideas 
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tsea_repair = yes
\t#may_perform_slave_raid = yes
\tmay_perform_slave_raid_on_same_religion = yes
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}


basic_idea_variation_act_54 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = quality_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = quality_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\twar_taxes_cost_modifier = -0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}


basic_idea_variation_act_55 = {

\tmonarch_power = MIL

\tpotential = {
\t\thas_idea_group = quantity_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = quantity_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tinfantry_cost = -0.15
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_56 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = expansion_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = expansion_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\trange = 0.25
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_57 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = administrative_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = administrative_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tembracement_cost = -0.5
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}

basic_idea_variation_act_58 = {

\tmonarch_power = ADM

\tpotential = {
\t\thas_idea_group = humanist_ideas
\t\t
\t\t\t
\t}
\tallow = {
\t\tfull_idea_group = humanist_ideas
\t\thidden_trigger = {
\t\tOR = {
\t\thas_idea_group = katholisch0
\t\thas_idea_group = protestant0
\t\thas_idea_group = reformiert0
\t\thas_idea_group = islam0
\t\thas_idea_group = confuci0
\t\thas_idea_group = budda0
\t\thas_idea_group = cathar0
\t\thas_idea_group = ancli0
\t\thas_idea_group = orthodox0
\t\thas_idea_group = tengri0
\t\thas_idea_group = norse0
\t\thas_idea_group = shinto0
\t\thas_idea_group = coptic0
\t\thas_idea_group = romuva0
\t\thas_idea_group = suomi0
\t\thas_idea_group = jew0
\t\thas_idea_group = slav0
\t\thas_idea_group = helle0 
\t\thas_idea_group = mane0
\t\thas_idea_group = animist0
\t\thas_idea_group = feti0
\t\thas_idea_group = zoro0
\t\thas_idea_group = nahu0
\t\thas_idea_group = mesoam0
\t\thas_idea_group = inti0
\t\thas_idea_group = tote0
\t\thas_idea_group = religious_ideas
\t\thas_idea_group = hindu0
\t\thas_idea_group = entwicklung0\t\t
\t\thas_idea_group = justiz0
\t\thas_idea_group = gesundheit0
\t\thas_idea_group = monarchie0
\t\thas_idea_group = republik0
\t\thas_idea_group = aristo0
\t\thas_idea_group = diktatur0
\t\thas_idea_group = horde0
\t\thas_idea_group = gross0
\t\thas_idea_group = galle0
\t\thas_idea_group = handel0
\t\thas_idea_group = kolonialimperium0
\t\thas_idea_group = assimilation0
\t\thas_idea_group = gesellschaft0
\t\thas_idea_group = propaganda0
\t\thas_idea_group = flottenbasis0
\t\thas_idea_group = nationalismus0
\t\thas_idea_group = konigreich0
\t\thas_idea_group = imperialismus0
\t\thas_idea_group = generalstab0
\t\thas_idea_group = stehendesheer0
\t\thas_idea_group = wehrpflicht0
\t\thas_idea_group = soldnerheer0
\t\thas_idea_group = waffenqualitat0
\t\thas_idea_group = festung0
\t\thas_idea_group = kriegsproduktion0
\t\thas_idea_group = staatsverwaltung0
\t\thas_idea_group = zentra0
\t\thas_idea_group = dezentra0 
\t\thas_idea_group = formation0
\t\thas_idea_group = militarismus0
\t\thas_idea_group = shock0
\t\thas_idea_group = fire0
\t\thas_idea_group = innovativeness_ideas
\t\thas_idea_group = spy_ideas
\t\thas_idea_group = dynasty0
\t\thas_idea_group = influence_ideas
\t\thas_idea_group = offensive_ideas
\t\thas_idea_group = defensive_ideas
\t\thas_idea_group = trade_ideas
\t\thas_idea_group = economic_ideas
\t\thas_idea_group = exploration_ideas
\t\thas_idea_group = maritime_ideas 
\t\thas_idea_group = quality_ideas
\t\thas_idea_group = quantity_ideas
\t\thas_idea_group = expansion_ideas
\t\thas_idea_group = administrative_ideas
\t\thas_idea_group = humanist_ideas

\t\t\t}
\t\t}
\t}
\t
\tnum_accepted_cultures = 1
\t
\tai_will_do = {
\t\tfactor = 1
\t\t
\t}
}


`


export default data;