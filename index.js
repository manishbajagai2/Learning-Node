function greet(name){
    console.log("Hello",name)
}

function higherOrderFn(callback){
    callback("Manish")
}

higherOrderFn(greet)