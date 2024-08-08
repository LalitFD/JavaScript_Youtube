// const tinderuser=new Object()
const tinderuser = {}


tinderuser.id = "123abc"
tinderuser.name = "lalit"
tinderuser.isLoggedIn = false
console.log(tinderuser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Lalit",
            lastname: "Doriya"

        }
    }
}

console.log(regularuser.fullname.userfullname)

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "A", 4: "B" }

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

const users = [
    {

        id: 1,
        email: "lalit@gmail.com"
    },

    {

        id: 2,
        email: "lalit@gmail.com"
    },

    {

        id: 3,
        email: "lalit@gmail.com"
    },
]

users[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))

console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS Hindi",
    Price: "Priceless",
    CourseInstructore: "Hitesh"
}

const { CourseInstructore: instructor } = course

console.log(CourseInstructore)
console.log(instructor)
