// Primitive

// 7 types : string, number, boolean, null, undefined, symbol,bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

copnsole.log(id === anotherId);
//its output is not same. 

const bigNumber = 3544645980897643n    // n is to make it big int for big values


// reference (non primitives)

// Array, objects, functions
 
const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "karan",
    age: 22,
}

const myFunction = function (){
    console.log(" Hello world");
}


// *******************************Type of Memory*********************************

// stack(Primtive): it gives copy of memory, heap(non Primitive): it changes in original memory

