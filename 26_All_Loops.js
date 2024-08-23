// // for of loop

// const arr =[1, 2, 3, 4, 5, 6] 
// for (const num of arr) {
//     console.log(num);
// }


// const greeting ="hello world !"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
// }

//Maps 

const map= new Map()
map.set('IN', "India")
map.set('USA',"United State Of America")
map.set('FR',"France")
map.set('PK',"Pakistan")
map.set('BANG',"Bangladesh")

console.log(map)

for (const [key,value] of map) {
    console.log(key ,":-", value)
}