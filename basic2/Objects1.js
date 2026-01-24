// const obj = {
//     name : "varad",
//     roll : 12,
//     age : 22,
//     hobby : "JS"
// }

// console.log(obj)  // prints all values

// console.log(obj["roll"]) 
// console.log(obj.roll)

// ++++++++++++ SYMBOLS+++++

const mySym = Symbol("key")

const obj = {
    name : "varad",
    roll : 12,
    age : 22,
    hobby : "JS",
    [mySym] : "me"
}
// console.log(typeof mySym)

// Object.freeze(obj)

// obj.name = "aniket"

// console.log(obj)

obj.greeting = function(){
    console.log("Greeting for JS student")
}

// console.log(obj.greeting)
// console.log(obj.greeting())
// obj.greeting()   // IMP

// obj.newFn = function(){
//     console.log(`Hello i am ${this.name}`)
// }

// obj.newFn()
