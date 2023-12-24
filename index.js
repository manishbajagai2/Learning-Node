const PizzaShop = require("./pizza-shop.js")
const DrinkMachine = require("./drink-machine.js")

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on("order", (size, topping) => {
    console.log(`Order received with ${size} pizza and ${topping}`)
    drinkMachine.serveDrinks(size, topping)
})

pizzaShop.order("large", "mushroom")

pizzaShop.displayOrderNumber()
