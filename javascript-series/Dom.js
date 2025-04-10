// Dom (document object model)
/*  🌐 What is the DOM in JavaScript?
 The DOM(Document Object Model) is a programming interface that allows JavaScript 
 to interact with and manipulate HTML and CSS content dynamically.
 It represents the structure of a web page as a tree of nodes.*/


// Description: Selects a single HTML element by its id.
const title = document.getElementById('tittle')
console.log(title.innerText);

//kasie element ki id nikalni ho tu yai use kariii 
document.getElementById('tittle').id

const classes = document.getElementsByClassName('intro')
console.log(classes[0]);

//kasie element ki class be nikal sakhti he id ki throw .
document.getElementById('tittle').className

const tags = document.getElementsByTagName('h2')
console.log(tags);

//getAttribute
//id or class ko exuess kar sakhti he
document.getElementById('tittle').getAttribute('id')
document.getElementById('tittle').getAttribute('class')

//setAttribute 
//id or class be set karr sakhti he  purani be sath class or id rakh sakhti he new be laga sakhti he 
document.getElementById('tittle').setAttribute('class' , 'test headingOne')
document.getElementById('tittle').setAttribute('id' , "tittle newId")

//styling
const tiile = document.getElementById('heading2')
tiile.style.backgroundColor = 'purple' 
tiile.style.color = 'white' 
tiile.style.padding = "20px"
tiile.style.borderRadius = "15px"
console.log(tiile);


//textContent  // innerHTML // innerText
const textContentsCheck = document.getElementById('tittle')

console.log(textContentsCheck.textContent); //dom of javascript  test for text
console.log(textContentsCheck.innerHTML); // dom of javascript  <span style="display: none ;">test for text</span>
console.log(textContentsCheck.innerText);//  dom of javascript

//innertext 
const innertexts = document.getElementsByTagName('strong').innerText = "change a inner Text in tag"
console.log(innertexts);

//innerHTML 
const innerhtml = document.getElementsByName('password').innerhtml = "<button>done</button>" ;
console.log(innerhtml);

 // input field ko be exuses type si be kar sakhti he 
//querySelector si ham first element  excuess kar sakhti he 
document.querySelector('input[type="password"]')
document.querySelector('h2')
document.querySelector('p')

//queryselectorAll  si ham all elements ko exuess kar sakhti he 
document.querySelectorAll('#id')
document.querySelectorAll('.class')
document.querySelectorAll('h1')// all h1 exuses hojai gii 
document.querySelector('p')// all p  exuses hojai gii 

const gury = document.querySelector(".selector")
gury.style.backgroundColor = "green"
gury.style.color = "white"
console.log(gury);


const gyall = document.querySelectorAll("#btn")
// gyall.style.backgroundColor = "black" ;
gyall.Style.backgroundColor = "green"
gyall.style.padding = "23px";
gyall.style.color = "white";
console.log(gyall);

// example
const ul = document.querySelector('ul')
const li =   ul.querySelector('li')
li.innerText = "changed in value " // change in innerText
console.log(li.innerText );//innnertext (one)
li.style.backgroundColor = 'red' 

//arry jisa he array ni he kuch properties milty he kafee
const tempList = document.querySelectorAll('li')
tempList[2].style.color = 'blue' // answer (NOdeList) me mila he as leyi arry ki properties kuch same he  index si exuses kar rahi he.

// Eample and different between  NodeList and Html COllection 

// NodeList 
// NodeList arry si milti jolti he 
//querySelectorAll si nodelist me sab ajata he forEach methods ki help si ham kam kar sakhti he nodelist me 
const double = document.querySelectorAll("li")
console.log(double);//NodeList 
// method forEach
double.forEach((li)=>{
    li.style.padding = "25px"
} )


// HTMLCollection
// HTMLCollection bulikul different hota he 
//asi array me change kar ki array ki methods use kar sakhti he 
const tempooo = document.getElementsByClassName('list-item')
console.log(tempooo);//answer html collection
//changed in array then changes in  
 const changeed = Array.from(tempooo)// array me changed hogaya  
//  array methods use kar sakhti he
 console.log(changeed);
 

const qury = document.querySelectorAll('#btn')
const bten = qury.forEach((btn) =>{
    btn.style.backgroundColor = "black" 
    btn.style.color = "white" 
    btn.style.padding = "10px"
    btn.style.borderRadius = "20px"
})
console.log(bten);// undifined

 //appendchild
 function addoptiLanguage(langename) {
    const newline = document.createElement('li');
    newline.appendChild(document.createTextNode(langename));
    document.querySelector('.course').appendChild(newline)
}
console.log(addoptiLanguage('Typescript'));

//edit
   const  third = document.querySelector("li:nth-child(4)")
    const  newli = document.createElement('li')
    newli.textContent = "mojo"
    third.replaceWith(newli)
    console.log(newli);
    
//example
const  first = document.querySelector('li:nth-child(1)')
// first.outerHTML ='<li>working</li>' // as line  si be ek dam chnaged ho sakhti he value 
const chngee = document.createElement('li')
chngee.textContent = "Javascript in 2025"
first.replaceWith(chngee);
console.log(chngee);

//remove
const lasted =  document.querySelector('li:last-child')
lasted.remove()


// addEventListener() in JavaScript
// The addEventListener() method is used to **attach an event handler*
// * to an HTML element — like a click, mouseover, keypress, etc.
// **Example

const btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
  alert("Button was clicked!");
});

btn.addEventListener('mouseover' , function(){
    btn.style.backgroundColor = "orange"
});

//target
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log("You clicked: ", e.target.textContent);
    e.target.style.backgroundColor = "orange";
  });
});

const newbtn = document.querySelectorAll('.buttons')
newbtn.forEach((btn)=>{
btn.addEventListener('click', function(e){
console.log("you clicked ", e.target.textContent);
e.target.style.color = "blue"
});
});


