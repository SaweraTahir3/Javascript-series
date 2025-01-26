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
