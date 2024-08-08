let a = 10

// if (true) {
//     let a = 55
//     const b = 20
//     var c = 30
//     console.log("INNER :", a)
// }

// console.log(a)
// // console.log(b)
// // console.log(c)

function one() {
    const username = "Lalit"

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    console.log(website)

    two()
}

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = "Youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++++++++  Intreasting +++++++++++++++++++++++++++

function addone(num) {
    return num + 1
}

addone(5)

const addTwo = function (num) {
    return num + 2
}
addTwo(5)

