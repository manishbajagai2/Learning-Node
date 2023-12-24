// import math from "./math-esm.mjs"
import * as math from "./math-esm.mjs"

// Or
// import { add, subtract } from "./math-esm.mjs"

// console.log(math.add(2,3))
// console.log(math.subtract(2,3))

// 4th WAY (DESTRUCTURING)

const { add, subtract } = math

console.log(add(3, 3))
console.log(subtract(3, 3))
