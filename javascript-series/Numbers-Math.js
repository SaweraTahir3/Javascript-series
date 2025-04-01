//Numbers and Maths

let price = 900 ;
console.log(price);

// Number Methods

// Formats a number to a fixed number of decimal places.
//toFixed()
 let fixed = 15.12
 console.log(fixed.toFixed(2));
  
//  Converts a number to a string.
 //toString()
 let changeInString = 156.21
 console.log(typeof (changeInString));
  let changed = changeInString.toString();
 console.log(typeof (changed));
 

//  Returns the number in exponential notation.
 //toExponential()
 let expoo = 350456
 let expoChange = expoo.toExponential(3) ;
 console.log(expoChange); //"3.505e+5"

 
//  Formats a number to a specified length.
 //toPrecision()
let Total = 10.05
let TotalChange = Total.toPrecision(3)
console.log(TotalChange); //10.1


// Returns the primitive value of a Number object.
//valueOf()
let  num = 1000000
console.log(num.valueOf());

//Static Methods

// Checks if the value is an integer.
//Number.isInteger()
console.log(Number.isInteger(20)); //true 
console.log(Number.isInteger('25'));//false


//Checks if the value is NaN (Not-a-Number).

console.log(Number.isNaN(12345));//false 
console.log(Number.isNaN(NaN));//true

//Checks if the value is a finite number.

console.log(Number.isFinite(1233444)); //true 
console.log(Number.isFinite(Infinity));//false 
console.log(Number.isFinite('string'));// false 
// Note  isFinite() method and isInteger() method are same 


//Number.parseInt()
// Parses a string and returns an integer.

console.log(Number.parseInt('500.10')) //500
 
// note : String  change  in number integer or point ki baad ki numbers ni ai gii  ;

// Number.parseFloat()
console.log(Number.parseFloat('700.56'));
// note point ki baad ki value be ati he or round of be hota ki point ki baad ;

//Number.isSafeInteger()
console.log(Number.isSafeInteger(12344566789956789321));//false
console.log(Number.isSafeInteger(12345678910)); //true


//Math Methods (Related to Numbers)

// Rounds a number to the nearest integer.
// Math.round()
console.log(Math.round(9.9)); //10

// Rounds a number downward to the nearest integer.
// Math.floor()
console.log(Math.floor(20.9)); //20

// Rounds a number upward to the nearest integer.
// Math.ceil()
console.log(Math.ceil(10.9)); //11

//  (removes the negative sign)..
// Math.abs()
console.log(Math.abs(-256));

// Returns the square root of a number.
// Math.sqrt()
console.log(Math.sqrt(36)); //6

// Returns the base raised to the exponent.
//Math.pow
console.log(Math.pow(2, 3));// 2*2*2 //8
// note 2 ko 3 time multiple karo

//Math.random()
console.log(Math.random()* (20 - 15) + 1);
// Formula { math.random() * (max - min) + min ;

console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 1);

// Math.min() and Math.max()
console.log(Math.min(1, 2, 3)); 
console.log(Math.max(1, 2, 7)); 

// Removes the decimal part of a number.
// Math.trunc()
console.log(Math.trunc(50.80));
