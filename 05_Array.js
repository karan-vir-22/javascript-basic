//  Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["thor", "Batman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

myArr.push(6)
myArr.pop()
myArr.push(7)

myArr.unshift(9)
myArr.shift()

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

myArr.pop(7)

// slice, splice

console.log("A", myArr);
const myn1 = myArr. slice (1, 3)  // it change in duplicate or copy array

console.log (myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);  // it change the original data or array 
console.log(myn2);