const fs = require("node:fs/promises")

// console.log('First')

// fs.readFile("./hello.txt","utf-8")
// .then(data => console.log(data))
// .catch(err => console.log(err))

// console.log('Second')

async function readFileData() {
    try {
        const data = await fs.readFile("./hello.txt", "utf-8")
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

readFileData()
