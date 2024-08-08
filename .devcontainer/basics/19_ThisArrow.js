const user = {
    username: "lalit",
    price: 999,
    WelcomeMessage: function () {
        console.log(`${this.username} ,welcome to website `)
    }
}
// function chai= () => {
//     let username ="lalit"
//     console.log(this)
// }
// chai()

const addTwo = (num1, num2) => num1 + num2


console.log(addTwo(3, 4))   