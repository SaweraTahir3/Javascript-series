## Lexical scoping
- Ek function apne outer (parent) function ke variables ko access kar sakta hai, chahe wo variables us function ke andar define na ho.
Aur ye access code likhne ke structure (position) pe depend karta hai — isliye ise "lexical" (meaning: code ka structure) scoping kehte hain.


```javascript
//Lexical scoping 
function outerFunction() {
  let name = "Ali"; // outer ka variable

  function innerFunction() {
    console.log(name); // outer ka variable access ho raha hai
  }

  innerFunction();
}

outerFunction();




```
## Closure
- Closure ek aisa combination hai jisme ek inner function apne outer (parent) function ke variables ko access kar sakta hai, chahe outer function ka execution complete ho chuka ho.


```html
 //Closure 

 <!DOCTYPE html>
<html>
<head>
  <title>Closure Color Change</title>
</head>
<body>
  <button id="colorBtn">Change Color</button>

  <script>
    function createColorChanger() {
      let colors = ["red", "blue", "green", "yellow", "pink"];
      let index = 0; // private variable

      return function() {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // cycle colors
      };
    }

    const changeColor = createColorChanger();

    document.getElementById("colorBtn").addEventListener("click", changeColor);
  </script>
</body>
</html>
```
