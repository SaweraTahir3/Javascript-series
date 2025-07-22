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




//Why Use Promises?
// We use promises to handle asynchronous tasks, like:

// Fetching data from a server

// Reading files

// Waiting for user input
