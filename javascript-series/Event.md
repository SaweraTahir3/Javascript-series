##   Events in javascript
## html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>javascript-series</title>
</head>
<body>
  <div id="main">
    <div id="second">
  <h1 onclick="alert('onclicked button')"> javascript course</h1>
  <!-- this is no good pratice -->
  <ul>
    <li id="varible">variables</li>
    <li id="data">DataTypes</li>
    <li id="array"> Arrays</li>
    <li id="obj"> Object</li>
    <li id="loop">loop</li>
    <li id="event">event</li>
    <br>
  </ul>
  </div>
  </div>
  <button id="stop"><a href="https://google.com">google</button></a>
  <script src="./event.js"></script>
</body>
</html>
```
## javascript
```javascript 
/events
//oncick zada information ni deta he as leyi  just good practice
let first = document.getElementById("obj").onclick = function(){
  alert('i am object')
}

//this is good practies
let secod = document.getElementById('array').addEventListener('click' ,function(){
  alert('i am array in javascript')

})
//using  thrid parameter of addEeventListner  true and false 
//true paramter is event  capturing  (oper si nechii)
document.getElementById('main').addEventListener('click' , function(){
  alert('inside the data')
},true)
document.getElementById('varible').addEventListener('click' , function(){
  alert('clicked variable')
}, true)

//false is by-defult in js 
//event bubling (nechi si oper)
document.getElementById('second').addEventListener('click' , function(){
  alert('inside the second div')
},false)
document.getElementById('event').addEventListener('click' , function(e){
  alert('clicked events topic')
  e.stopPropagation()
}, false)

document.getElementById('stop').addEventListener('click' , function(e){
  e.preventDefault()
  e.stopPropagation()
  alert('canot run try again')
})

document.querySelector('main').addEventListener('click' , function(e) {
console.log(e.target.parentNode())

})









```

