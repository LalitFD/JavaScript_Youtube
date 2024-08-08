const isUserloggedIn = true

if (2 == 3) {
    console.log("executed")
} else {
    console.log("Not executed ")
}

// < ,> ,<=,>=,==,!=,===,!==

const temperature = 41
if (temperature < 50) {
    console.log("less then 50");
}
else {
    console.log("Temperature is greater than 50 ")

}

const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`user power : ${power}`)
}

const balance = 1000
if (balance < 500) {
    console.log("less than 500")
}
else if (balance < 750) {
    console.log("less than 750")
}
else if (balance < 1200) {
    console.log("less than 1250")
}

const debitcard = true
const loggedInFormGoogle = false
const loggedInFormEmail = true
if (isUserloggedIn && debitcard && 2 == 3) {
    console.log("Allow to buy course ...")
}
if (loggedInFormGoogle || loggedInFormEmail) {
    console.log("user Logged in ...")
}

const month = 3
switch (month) {
    case 1:
        console.log(" January ")
        break

    case 2:
        console.log(" Febarary ")
        break

    case 3:
        console.log(" March ")
        break
    case 4:
        console.log(" April ")
        break
    case 5:
        console.log(" May ")
        break

        default:
        console.log(" number is not exit ")
}

