//Singleton

//object literels

const jsuser = {
    fullname: "Lalit",
    age: 18,
    location: "Indore",
    email: "doriyalalit8@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Tuesday"]
}

console.log(jsuser.email)
console.log(jsuser.fullname)

jsuser.email = "lalit@gmail.com"
Object.freeze(jsuser)

jsuser.email = "Hitesh@gmail.com"
console.log(jsuser)

jsuser.greeting = function () {
    console.log("Hello js user..")
}

jsuser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`)
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());