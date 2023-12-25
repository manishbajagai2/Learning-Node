const buffer = new Buffer.from("Manish")

buffer.write("Code")  // rewriting the buffer replacing the original temporal character

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())
