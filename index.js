// The HTTP module allows the creation of web servers that can transfer over HTTP

const http = require("node:http")

const server = http.createServer((req, res) => {
    // console.log(req)
    const superHero = {
        firstName: "Bruce",
        lastName: "Wayne"
    }
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(superHero))
})

server.listen(3000, () => {
    console.log("Server listening on port 3000")
})
