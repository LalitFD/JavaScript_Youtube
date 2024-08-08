

function sayMyName() {
    console.log("L");
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("T");
}
// sayMyName() 

function addTwoNumber(number1, number2) {
    console.log(number1 + number2)

}
addTwoNumber(5, 4)

// // different types write a function 

function multipliactionnumber(number1, number2, number3) {
    let result = number1 * number2 + number3
    return result
}

const result=multipliactionnumber(5,9,7)
console.log("Result :" + result)

// more different types write a function

function loginUserMessage(username){
if(username === undefined){
    console.log("please enter a username..")
    return
}
    return `${username} Just Logged In`
}
 console.log(loginUserMessage())
console.log(loginUserMessage("Lalit"))