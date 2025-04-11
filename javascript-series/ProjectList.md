# Solution code 

## Project 1

```javascript 

const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((button)=>{
button.addEventListener('click' , function(e){
  if(e.target.id === "blue"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "pink"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "yellow"){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === "purple"){
    body.style.backgroundColor = e.target.id
  }
});
});

// ----------completed Project 1 js code ----------


```
## project 2 
   
  ## BMI Genretor

  ```javascript 
  const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a vaild height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show tha result
    result.innerHTML = `<span>${bmi}</span>  `;
    
  }
});
 ```
