// //For Loops 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number ")
//     }
//     console.log(element)
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop value :${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop value :${j} and inner loop ${i}`)
//         console.log(i + '*' + j + '=' + i * j)
//     }
// }

// let MyArray = ["raaju", "kamal", "malan", "hasan", "saina", "chana", "shela", "kamla", "chacha", "palan"]
// console.log(MyArray.length)

// for (let index = 0; index < MyArray.length; index++) {
//     const element = MyArray[index];
//     console.log(element)

// }
// Break And Continue 
for (let i = 0; i < 20; i++) {
    if (i == 5) {
        console.log(" Detected 5 ")
        continue
    }
    console.log(`value of 1 is ${i}`)
}