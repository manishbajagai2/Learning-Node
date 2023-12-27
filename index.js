// A stream is a sequence of data that is being moved from one point to another over time
// Ex a stream of data that is being transferred form one file to another within the same computer

const fs = require("node:fs")

const readableStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark: 2, // since default buffer size used by stream is 64kb
})

const writableStream = fs.createWriteStream("./file2.txt")

readableStream.on("data", (chunck) => {
    console.log(chunck)
    writableStream.write(chunck)
})
