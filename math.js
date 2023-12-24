// 1st WAY

// const add = (a, b) => {
//     return a + b
// }

// module.exports = add


// 2nd WAY

// module.exports.add = (a, b) => {
//     return a + b
// }

// module.exports.subtract = (a, b) => {
//     return a - b
// }


// 3rd WAY

const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

module.exports = {
    add,
    subtract,
}


// 5th WAY

// Since each module wrapper has export in it. Below is discouraged to do so
// exports.add = (a, b) => {
//     return a + b
// }

// exports.subtract = (a, b) => {
//     return a - b
// }
