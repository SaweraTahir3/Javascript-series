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