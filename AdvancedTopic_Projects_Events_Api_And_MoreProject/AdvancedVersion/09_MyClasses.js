// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encrpytPassword() {
        return `${this.password}abc`
    }
    ChangeUsername() {
        return `${this.username.toUppperCase()}`
    }
}

const chai = new User("Chai", "Chai@gmail.com", "123")

console.log(chai.encrpytPassword())
console.log(chai.ChangeUsername())

//Behind the scan 
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encrpytPassword = function () {
    return `${this.password}abc`
}

User.prototype.ChangeUsername = function () {
    return `${this.password.toUppperCase()}abc`
}
const tea = new User("Tea", "Tea@gmail.com", "123")

console.log(tea.encrpytPassword());
console.log(tea.encrpytPassword());