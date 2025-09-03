## Html
```Html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <!--
      Need a visual blank slate?
      Remove all code in `styles.css`!
    -->
    <link rel="stylesheet" href="styles.css" />
    <!-- <script type="module" src="script.js"></script> -->
  </head>
  <body class="image">
    <nav class="container">
    <p class="para"> 
    <a href="/" aria-current="page">Seasons</a>
      
    <a href="" id="summer" >Summer</a>
    <a href="/" id= "winter">Winter</a>
    <a href="/"  id="autum">Autum</a>
    <a href="/" id="spring" >Spring</a>
  </p>
    </nav>
    <main> 
    </main>
    <footer>
      <button class="btn">Next</button></footer>
      <script type="module" src="script.js"></script>
  </body>
</html>

```
## CSS
```Css

body {
  margin: 0;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: black;
  width: 100%;
  height: 100%;
}
/* .image{
  background-repeat: no-repeat;
  width: 140rem; 
   height: 50%;
} */
nav {
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  gap: 0.5rem;  
}
.container {
  display: inline-block;
}
.para  a {
  display: inline-block;
  min-width: 1rem;
  padding: 0.5rem; 
  text-align: center;
  text-decoration: none;
  color: #555;
  margin: 15px;
  font-size: 30px;
}
nav a[aria-current='page'] {
  color: #000;
  display : inline-flex; 
  font-size: 3rem;
  margin-right: 30rem;
  text-decoration: none;
  padding: 6px;
  margin-left: 25px;

}
main {
  padding: 1rem;
}
h1 {
  font-weight: bold;
  font-size: 1.5rem;
}
.btn {
  width: 15rem;
  height: 5rem;
  margin-left: 60px ;
  position : absolute ;
  top: 70%;
  border-radius: 50px;
  font-size: 3rem;
  border-style: none;
}
 ```
## Javascript 
```Javascript

let summer = document.getElementById("summer")
let winter = document.getElementById("winter")
let autum = document.getElementById("autum")
let spring = document.getElementById("spring")
let body = document.querySelector("body")

function changeColor(color){
  body.style.backgroundColor = color;
}  
 let sum =   summer.addEventListener('click' , function(){
  changeColor("yellow") ;
})

let win =   winter.addEventListener('click' , function(){
  changeColor("blue") ;
})
let autu = autum.addEventListener('click' , function(){
  changeColor("orange") 
})

let spri = spring.addEventListener('click' , function(){
  changeColor("red") 
})
```





