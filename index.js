// const superHero = require("./super-hero.js")

// console.log(superHero.getName())
// superHero.setName("Superman")
// console.log(superHero.getName())

// const newSuperHero = require("./super-hero.js")
// // Here required module is already called and cached,
// // therefore even if new require should have Batman initialized,
// // the cached module called with require before has setName initialized to Superman
// console.log(newSuperHero.getName())

// Now if we want different initialization each time :

const superHero = require("./super-hero.js")

const batman = new superHero("Batman")
console.log(batman.getName())
batman.setName('Bruce Wayne')
console.log(batman.getName())

const superman = new superHero("Superman")
console.log(superman.getName())