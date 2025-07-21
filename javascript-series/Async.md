## Html
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async topic</title>
</head>
<body>
  <h1>Asyncnourans methods in javascript </h1>
  <button id="stop">stop</button>

  <!-- working different exmple of setinterval  -->
  <h2>on & of</h2>
  <button id="on">on</button>
  <button id="off">off</button>
    
    <script src="./Async.js"></script>
</body>
</html>
```
##  Javascript
```JAVASCript

// Async topic

// methods and web API functions

// setTimeout and setInterval working different  checkout his examples

 const hello = (function(){
    alert('hello world ')
})
setTimeout(hello, 2000)

// setTimeout eample
 const changeText = document.querySelector('h1').innerHTML = "javascript  adanvce topic " ;
 const changeMe = setTimeout(changeText ,2000 )

 //clearTimeout()
  document.querySelector('#stop').addEventListener('click' , function(){
    clearTimeout(changeMe)
 })

// example  setInterval method 
 const intervalmethd = document.querySelector("#on").addEventListener('click' , function(){
    console.log("i am sawera ")
 })
 // yai method work karta rahi ga jab tak ap off khud ni kri gi 
  const workingLine = setInterval(intervalmethd ,Date.now().toLocaleString() ,1000 )

   document.querySelector("#off").addEventListener('click' ,function(){
    clearInterval(workingLine)
   })

 //note : setTimeout() and setInterval() different between 
 // setTimeout()  work in only 1 time .
 //setInterval()  work now canot stop 

```
