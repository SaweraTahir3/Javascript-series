//promise 


 const promiseOne = new Promise( function(resolve , reject){
   setTimeout(function(){
    console.log("asyn task one" );
    resolve()
   } , 1000)
 }) // create this promise

   promiseOne.then(function(){
    console.log('promise consumed');
    
   })// consumed promise


   new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('ayanc task two');
      resolve()
      
    },1000)

   }).then(function(){
    console.log("aysanc 2 resolve");
   })

   const promiseThree = new Promise(function(resolve,reject){
 setTimeout( function(){
  resolve({username:"sawera" , email : "sawera@gmail.com"}) //resolve ki under jo parameter deyi
  //  he wo save he next step  .then  me esaliy exsse kar sakhti he.
 },1000)
   })
   promiseThree.then(function(user){
console.log(user); // parameter ko exssise kar sakhti he yaha
   })
 
   const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
let error = true ;
if(!error){
  resolve({username:"saweraweb developer" , password : "webDeve" })
} else{
  reject("ERROR : something went wrong ")
}
    },1000)
   })
promiseFour
.then((user)=>{
  console.log(user);
  return user.username
})
.then((username)=>{
  console.log(username);
})
.catch(function(error){
  console.log(error);
  
}).finally(()=>{
  console.log("the promise is either resolved and rejected");
})
 

const promiseFive  = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error= true;
    if(!error){
      resolve(" your problem are  resolved")
    }else{
      reject('your problem are rejected')
    }
    
  },1000)
})

async function promiseConsumedFive(){
  try{
  const response  = await promiseFive
  console.log(response);
  }catch(error){
console.log(error);

  }
  
} 
promiseConsumedFive()

// exmple ko async or promise dono me kara he
//fetch 

//async
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/")
    console.log(response); //kiya response me data arha he 
    const data = await response.json() // data ko json me change honi me time lagta he await use hoga
    console.log(data);
  } 
  catch (error) {
    console.log("Error"  , error);
  }}


//permoise 
fetch('https://jsonplaceholder.typicode.com/')
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data);
})
.catch(error => console.log(error))


//  Promise — the old way (before async/await)
// A Promise helps you run code that takes time (like fetching data), and handle success or error later using .then() and .catch().

//example 
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data mil gaya!");
    }, 2000);
  });
}

getData()
  .then(result => console.log(result))
  .catch(error => console.log(error));


// async/await — modern and easier way
// async/await makes Promise-based code
// look simpler, like normal step-by-step code. 
// You write await in front of the Promise to wait for the result.
//  example
async function showData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

showData();


//Why Use Promises?
// We use promises to handle asynchronous tasks, like:

// Fetching data from a server

// Reading files

// Waiting for user input

//note: A Promise does return a value — but not immediately.

//---------------------------------------------------xxx----------------------

// Why do we use async in JavaScript?

//We use async to make it easier to work with promises —
//  especially when dealing with code that takes time to run, like:

//Fetching data from an API

//Reading from a file

//Waiting for a timer

// note : async means:
// "This function will do something asynchronous (not instantly), and it will return a Promise."