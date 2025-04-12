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
## project 3 

 ## Digital Clock

 ```javascript 
const clock = document.getElementById("clock")

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
} , 1000)

```

## project 4

## Guess the number

```javascript 

const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('guessField');
const preGusess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowerhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPars');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please inter a valid number');
  } else if (guess < 1) {
    alert('please inter a  number  more than 1 ');
  } else if (guess > 100) {
    alert('please inter a number less than 100 ');
  }else {
    preGusess.push(guess)
    if(numGuess  === 11){
     displayGuess(guess)
     displayMessgae(`game Over. randam number was ${randomNumber}`)
     endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
```

