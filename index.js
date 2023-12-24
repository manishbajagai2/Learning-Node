const math = require("./math.js")

// console.log(math(2,3))

// console.log(math.add(2,3))
// console.log(math.subtract(2,3))

// 4th WAY (Destructuring)

const { add, subtract } = math

console.log(add(2, 3))
console.log(subtract(2, 3))
