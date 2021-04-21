var p = new Promise (function (resolve, reject) {
    let val = "Hello World"

    if (val.length == 11) {
        resolve(val)
    } else {
        reject("failed")
    }
})

p.then ((value)=> {

    console.log("SUCCESS -" + value)

}).catch((value)=> {
    console.log("error")    
})