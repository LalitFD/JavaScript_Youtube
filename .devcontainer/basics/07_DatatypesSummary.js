//Primitive data types

// 7 types :- String, Number, boolean ,null ,undefined , Symbol, BigInt 9


// Reference (Non Primitive )
// Array,Object ,Function 

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const OutSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
const bignumber = 62631514315431543143n

const heros = ["shanktiman", "nagraj", "doga", "pushpa", "meghraj", "spiderman"];

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

let MyObj = {
    name: "Lalit",
    age: 22
}
console.log(MyObj)

const Myfunction =function(){
    console.log("Hello Chai...")
}

console.log(Myfunction)


let somenumber=33
let stringumber=String(somenumber)
console.log (typeof stringumber)         //yaha per hmne number ko string me change kara hai 

let user={
    email:"USER@GMAIL.COM",
    upi:"USER@YBL"
}

console.log(user)
