```Html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>To Do App</title>
</head>
<body>
 
<h1> Todo app</h1>
<div>
<input id="input" type="text" placeholder= "name"/>
<button id="add">Add</button>
<button id="remove">remove </button>
 </div>

<div>
 <ul id ="list">
<li>sawera</li>
</ul>
</div>
</body>
</html>
```
```Javascript

let input = document.getElementById("input")
let addButton = document.getElementById("add")
let removeButton = document.getElementById("remove")
let list = document.getElementById("list")

addButton.addEventListener('click', function(){
 if (input.value.trim() == "" ){
alert("wrong")}
else  (input.value === "name"){
let li = document.createElement("li")
li.textContent = input.value 
list.appendChild(li)
}

removeButton.addEventListener('click' , function (){
if (input.value === "namesss"){
input.value.remove()
}
})

``` 
