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

//fetch 
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/")
    const data = response.json()
    console.log(data);
    
  } catch (error) {
    
  }
}









//Why Use Promises?
// We use promises to handle asynchronous tasks, like:

// Fetching data from a server

// Reading files

// Waiting for user input
