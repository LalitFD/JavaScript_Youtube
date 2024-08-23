// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     +
//     console.log(item)
//     return item
// })

// console.log(values)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, , 10]
// const newnums = myNums.filter((num) => num > 4)

// console.log(newnums)


// const books = [

//     { title: 'Book One', genre: "fiction", publish: 1981, edition: 2004 },
//     { title: 'Book two', genre: " Non-fiction", publish: 1992, edition: 2008 },
//     { title: 'Book three', genre: "History", publish: 1995, edition: 2006 },
//     { title: 'Book four', genre: "Non-fiction", publish: 1987, edition: 2008 },
//     { title: 'Book five', genre: "Science", publish: 2005, edition: 2022 },
//     { title: 'Book six', genre: "fiction", publish: 1655, edition: 2024 },
//     { title: 'Book seven', genre: "History", publish: 1384, edition: 2025 },
//     { title: 'Book eight', genre: "Science", publish: 1986, edition: 2014 },
//     { title: 'Book nine', genre: "fiction", publish: 2009, edition: 2013 },
//     { title: 'Book ten', genre: "Non-fictio", publish: 2010, edition: 2014 }
// ];
// const userbooks=books.filter((bk)=>bk.genre === 'History')
// const userbook=books.filter((bk)=> bk.publish>=2000)
// console.log(userbook);
// console.log(userbooks);


const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newnumss = myNumber.map((num) => num + 10)
const NewNums = myNumber
    .map((num) => num + 10)
    .map((num) => num + 1)
    .filter((num)=>num <=20)
console.log(NewNums)
