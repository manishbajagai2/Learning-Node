// Pipes retuns the destination stream enabling chaining, condition is
// the destination stream should be readable, duplex or a transform stream
// In the example, we have writableStream at last so we cannot call pipe, so using zlib

const fs = require("node:fs")
const zlib = require("node:zlib") // Provides file compression using zlib algorithm

const gzip = zlib.createGzip() // will be a transform stream to enable pipe

const readableStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2, // since default buffer size used by stream is 64kb
})

// const writableStream = fs.createWriteStream("./file2.txt")

// readableStream.on("data", (chunck) => {
//     console.log(chunck)
//     writableStream.write(chunck)
// })

// A simplier and better way is to use pipe

// readableStream.pipe(writableStream)

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))
