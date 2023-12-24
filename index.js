const EventEmitter = require("node:events")


const newEmitter = new EventEmitter()

newEmitter.on('order',(size,topping) => {
    console.log(`Order received with ${size} pizza and ${topping}`)
})
newEmitter.on('order',(size) => {
    if(size){
        console.log("Complementary drink added")
    }
})

newEmitter.emit('order','large','mushroom')