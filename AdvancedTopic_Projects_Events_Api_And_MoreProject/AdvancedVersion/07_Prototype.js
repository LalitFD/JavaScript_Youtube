// 

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",

    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.lalit = function () {
    console.log(`lalit is present in all objects `);

}

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`)
}

// heroPower.lalit()
// myHeroes.lalit()
myHeroes.heyHitesh()
// heroPower.heyHitesh()


//Inheritence

const User = {
    name: "chai",
    email: "Chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    inAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern synatax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode"

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)                         
    
}

anotherUserName.trueLength()
"Hitesh".trueLength()
"IceTea".trueLength()