// Variables

// Three most important concepts of  variables in javascript 
//  1. var
//  2. let 
//  3. const 

// definaition of var : 
//  var is global scope in javascrpit

// defination of let :
// // let  is block scope in javascript 

// defination of const :
// const is  block scope of javascript , constant  value , permanent fix this variable .

var acountName = 'Sawera Tahir';
let acountId = 2571;
const acountEmail = 'sawera@gmail.com';
let openAcount = true;
City = 'karachi';

console.table([acountName, acountId, acountEmail, openAcount, City])

// change in value & see the differents of variable 

var acountName = 'sawera webDeveloper';
acountId = 1511;
openAcount = false ;
City = 'Lahore';

console.table([acountName, acountId, openAcount, City]);

// questions 

//  Q1 : Declare a variable x with the value 10. Log the value of x to the console.
let x = 10;
console.log(x);

// Q2 :  Create a const variable PI and assign it the value 3.14. Try reassigning it and see what happens.
const PI = 3.14;
// PI = 3.14555 // error beacuse this variable are conatant 
console.log(PI);

//  Q3 : Declare two variables a and b with values 5 and 15. Swap their values without declaring a new variable.
let a = 5;
let b = 15;
console.log(a, b);

//  Q4 : Create a variable greeting using let and assign the string "Hello". Reassign it to "Hi" and log the new value.
let greeting = 'Hello';
greeting = "Hi";
console.log(greeting);

//  Q5 : Write a program that declares three variables: name, age, and city. Log the following sentence using template literals:
//"My name is [name], I am [age] years old, and I live in [city]."

let name = 'Sawera Tahir';
let age = 22;
let city = 'karachi ';

console.log(`my name is ${name} , I am ${age} years old , I live in ${city}`);


/* ------------------------------------*******************-------------------------------------*/
