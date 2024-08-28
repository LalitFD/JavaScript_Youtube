// const user = {
//     userName: "Lalit",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         // console.log("Got User Details From Database")
//         // console.log(`Username : ${this.userName}`)
//         // console.log(this)
//     }

// }

// console.log(user);
// console.log(user.getUserDetails())
// console.log(user);

const user2 = {
    userName: "Lalit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got User Details From Database")
        // console.log(`Username : ${this.userName}`)
        // console.log(this)
    }

}
// const promiseOne =new Promise()
// const date  =new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    // return this
}
const userOne = new User("Lalit", 12, true)
const userTwo = new User("ChaiAurcode", 54, false)
// console.log(userTwo)
// console.log(userOne.constructor)

//New Example Of Constructor

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

}
const auto = new car("Honda", "Accord", 2021)

console.log(auto instanceof car);

console.log(auto instanceof Object);