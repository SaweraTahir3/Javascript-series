//Arrays 

const firstarray = [ 1,2,3,5,6];
console.log(firstarray);

const newArrays = new Array(1,2,3,4,5,6,7,8,9,)
console.log(newArrays[4]);
console.log(newArrays.indexOf(9));

//  Array Methods 

//push 
 const methodsOfArray = new Array(0,1,2,3,4,5,6,7,8,9);
 console.log(methodsOfArray);
  methodsOfArray.push(10) // add number end of the array
console.log(methodsOfArray);

//pop 
methodsOfArray.pop() // remove number end of the array
console.log(methodsOfArray);

//unshift 
methodsOfArray.unshift(15) // add number start of the array
console.log(methodsOfArray);
 
// shift
methodsOfArray.shift() // remove number start of the array
console.log(methodsOfArray);



const newMethods = new Array(10,11,12,13,14,15,16 ,17)
console.log(newMethods);

//includes
console.log(newMethods.includes(8)); // boolean answer

 //slice 
 console.log(newMethods.slice(2,6)); // slice me  2 number cut hogai  baki  baki count hoki total 6  value print hogi   ai ge  4 or 2  value slice hogi 
 
// splice
const changeMethods = new Array(10,20,30,40,50,60 ,70,80,90,100,110, 120 )
console.log(changeMethods.splice(5,7)); // as method me remove kara sakhti or jitni values chaiyi utna print kara sakhti he

//join
const changeToString = new Array('sawera' , 'developer' , '2025')
console.log(changeToString.join()); // arrays  change in  to string 

// Concat
const arr1 = ['i am simple array & ']
const arr2 =['i am join to simple  array']
const arr3 = (arr1.concat(arr2))
console.log(arr3);

//lastindexof
const endof = [1 ,2,3,4,5,6,7,8,9 ]
const lastindexof = (endof.lastIndexOf(5))
console.log(lastindexof);


// spread
const  book = ['math' , 'english' , 'urdu' , 'html']
const codebook= ['javascript' , 'react']
let compalted = [...book , ...codebook]
console.log(compalted);


//flat 
 const arrybox = [1,2,3,45 ,[6,7,8,9] ,[10,20,30],[40,50,60]] 
 const changeInRealArray = arrybox.flat(Infinity) //bhaut sari arrays  ko change karta he el array me
 console.log(changeInRealArray);
 
 console.log(Array.isArray('kiya yai array he ?')); //answer in boolean
 console.log(Array.from('me array  me change hojati ho from lagni si'));


 let marks1 = 600 ;
 let marks2 = 500;
 let marks3 = 5000 ;
 console.log(Array.of(marks1,marks2, marks3)); //change in to array 
  
//  array.forEach

let num = [1,2,3,4]
num.forEach((nums , index , arr)=>{
arr[index] = nums * 2

})
console.log(num);


// map 
let maping = ['user' , 'name', 'age', 'marks', 'class', ]
let store = maping.map((item ,index)=>`${index} : ${item}`)
console.log(store);

//sort
const balanceIn = [50, 30, 20, 10, 40];
balanceIn.sort((a, b) => a - b);
console.log(balanceIn); 

//reverse
const arr = [1, 2, 3, 4, 5]
arr.reverse();
console.log(arr); 
 
//filter
const numbers = [5, 12, 8, 130, 44];

const result = numbers.filter((num) => num > 30)
console.log(result); // [12, 130, 44]


const filtered = [10,2,4,8,10 ]  
const resulted = filtered.filter((sum) => sum > 5)
console.log(resulted);



const mixedArray = [0, 1, false, 2, "", 3, null, undefined];
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues); 



 //even number 
 const evenNum = [1, 2, 3, 4, 5, 6,7,8,10 ];
const evenSquares = evenNum
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num ** 2);        // Square them

console.log(evenSquares); 



const age = [ 10,15,12, 18 , 20, 5, 7,9]
const countAge = age.filter((ages) => ages < 10) 
// const countAge = age.filter((ages) => ages > 10) 
console.log(countAge);


//dabal numbers ko remove karo 
const uniqueType = [1,1,2,3,3,4,5,6,7,7,7,7,7,8,9,10]
const drobleNum = uniqueType.filter(( num ,index, array) => array.indexOf(num) === index )
console.log(drobleNum);


//dabal string ko remove karo 
const stringNUmber = ['apple' , 'mango' ,'apple' , 'banana' , 'apple','orange']
const changed = stringNUmber.filter((num , index, array)=> array.indexOf(num) === index)
console.log(changed);


// array me si string value nikalo 
const mix = ['apple' ,  undefined , 'banana'  , null ,'mango', 1,2,3,4,5]
const getstring = mix.filter(item => typeof item === "string" )
console.log(getstring);


//array me si number ko nikalo
const mixd= [ 0,'apple'  ,8,'mango', true , undefined,'apple' , 'banana'  , null ,1 ]
const getNumber = mixd.filter(item => typeof item === "number" )
console.log(getNumber)

//reduce 
//bignumber nikalana he
const  bignum = [1,2,30,50]
const bigerNum = bignum.reduce((acc , num) => acc < num  ? num : acc)
console.log(bigerNum);

//all numbers ko + karna he 
const count = [ 10,20,30,40 ]
 const counted = count.reduce((acc , num ) => acc + num, )
 console.log(counted);
 
 const reduced = ['html' , "html" , 'css' ,'react', 'javascript' , 'react']
 const cout = reduced.reduce((acc , topic) =>{
  acc[topic] = (acc[topic] || 0 ) +1 ;
  return acc;
 } , {})
 console.log(cout);
 
//reduceRight
 const letters = ["H", "e", "l", "l", "o"];

 const reversed = letters.reduceRight((acc, letter) => acc + letter, "");
 console.log(reversed); // "olleH"
 

 //some
//ek condition true hoge tu ans true
 const somer = [1, 3, 5, 7];

const hasEven = somer.some((num) => num % 2 === 0);
console.log(hasEven);
console.log(somer.length);
//answer boolean me deta he some

//every 
//all condition true hoge 
let arr = [1, 2, 3];
let allGreaterThanZero = arr.every(x => x > 0); // true
