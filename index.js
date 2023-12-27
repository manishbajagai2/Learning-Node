// The HTTP module allows the creation of web servers that can transfer over HTTP

const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })

    // const data = fs.readFileSync(__dirname + "/index.html", "utf-8") // This is reading the entire html content and increasing unnecessary buffer size
    // res.end(data)

    // So we will use readStream to save memory and time
    fs.createReadStream(__dirname + "/index.html").pipe(res)
})

server.listen(3000, () => {
    console.log("Server listening on port 3000")
})
