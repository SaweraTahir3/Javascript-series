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
  <title>Closure Color Buttons</title>
</head>
<body>
  <button id="orangeBtn">Orange</button>
  <button id="greenBtn">Green</button>

  <script>
    // Closure function to create a color changer
    function createColorChanger(color) {
      return function() {
        document.body.style.backgroundColor = color;
      };
    }

    // Create closures for each button
    const changeToOrange = createColorChanger("orange");
    const changeToGreen = createColorChanger("green");

    // Attach events
    document.getElementById("orangeBtn").addEventListener("click", changeToOrange);
    document.getElementById("greenBtn").addEventListener("click", changeToGreen);
  </script>
</body>
</html>

 
```
