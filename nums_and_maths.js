const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));     // its important, its used to fix decimels and it makes it using roundoff


const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));  // its used to get values with (,) like 10,00,000


//******************************Maths**********************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(2.7));
console.log(Math.min(4, 2, 8, 9));
console.log(Math.max(4, 2, 8, 9));

console.log(Math.random());  // it give a value in between 1 and 0
console.log((Math.random()*10) + 1); 



const min = 10
const max = 20

console.log(math.floor(Math.random() * (max - min + 1)) +min);

