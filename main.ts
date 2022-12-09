game.splash("today we will calculate the cost of a pizza")
let value = game.askForNumber("enter diameter of pizza (Inches)")
let Tax = 1.13
let rent_on_shop = 1
let materials = 0.5
let labour_cost = 0.75
let cost_of_pizza = (value * materials + (rent_on_shop + labour_cost)) * Tax
game.splash("The cost of the pizza with a diameter of" + value + " inches long, and a Total cost with tax of " + cost_of_pizza + " dollars")
