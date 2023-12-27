const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req,res) => {
    const name = "Manish"
    res.writeHead(200, { "Content-Type": "text/html"})
    let data = fs.readFileSync(__dirname + "/index.html", "utf-8")
    data = data.replace("{{name}}",name)
    res.end(data)
})

server.listen(3000, () => {
    console.log('Server listening at port 3000')
})