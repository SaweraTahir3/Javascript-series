//promise


let promise = new Promise(function(resolve, reject) {
  let foodReady = true;

  if (foodReady) {
    resolve("Food is delivered!");
  } else {
    reject("Food not delivered.");
  }
});

promise
  .then(function(result) {
    console.log(result); // If success
  })
  .catch(function(error) {
    console.log(error); // If error
  });

//Why Use Promises?
// We use promises to handle asynchronous tasks, like:

// Fetching data from a server

// Reading files

// Waiting for user input
