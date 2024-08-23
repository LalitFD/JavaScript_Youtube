const array1 = [1, 2, 3, 4, 5, 6]
// 0+1+2+3+4

const initialvalue = 0;
const sumWithInitial = array1.reduce((accumulator, curentvalue) => accumulator + curentvalue, initialvalue);
console.log(sumWithInitial);

const mynums=[1,2,3]
const mytotal=mynums.reduce(function(acc,currval){
    return acc+currval
},0)

console.log(mytotal)