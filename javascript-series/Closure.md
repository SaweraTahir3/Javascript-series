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
```html <!DOCTYPE html>
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