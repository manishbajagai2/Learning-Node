// // 1st WAY

// const add = (a, b) => {
//     return a + b
// }

// export default add


// // 2nd WAY

// export default (a, b) => {
//     return a + b
// }


// // 3rd WAY

// const add = (a, b) => {
//     return a + b
// }

// const subtract = (a, b) => {
//     return a - b
// }

// export default {
//     add,
//     subtract
// }


// 5th WAY (Named Exports)

export const add = (a, b) => {
    return a + b
}

export const subtract = (a, b) => {
    return a - b
}

