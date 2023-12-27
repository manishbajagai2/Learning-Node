// The HTTP module allows the creation of web servers that can transfer over HTTP

const http = require("node:http")

const server = http.createServer((req, res) => {
    // console.log(req)
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Responding Hello World")
})

server.listen(3000, () => {
    console.log("Server listening on port 3000")
})
