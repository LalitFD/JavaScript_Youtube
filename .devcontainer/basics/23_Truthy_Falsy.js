const userEmail = "lalit8Ggmail.com"

if (userEmail) {
    console.log("Got user email")
}

else {
    console.log("Dont have user email ")
}


//falsy values 
// false,0,-0, bigint on, " ", null ,undefined, NAN

// truthy values 
// "0","false", "", {},function(){}

if (userEmail.length === 0) {
    console.log("Array is empty ")
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty..")
}

let val1;
// val1= 5 ?? 10
val1 = null ?? 10

console.log(val1)


// ternary operator 
// consdition ?  true : false 

const Teaprice = 50
Teaprice >= 80 ? console.log("More than 80 ") : console.log("less than 80")