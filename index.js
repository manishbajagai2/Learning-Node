const fs = require("node:fs")

console.log("First")

const fsReader = fs.readFileSync("./hello.txt", "utf-8")
console.log(fsReader)
console.log("Second")

fs.readFile("./hello.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

console.log("Third")

fs.writeFileSync("new.txt", "A new file")

fs.writeFile("new.txt", " New content appended", { flag: "a" }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File written successfully")
    }
})
