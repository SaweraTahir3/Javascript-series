// Dom (document object model)
/*  🌐 What is the DOM in JavaScript?
 The DOM(Document Object Model) is a programming interface that allows JavaScript 
 to interact with and manipulate HTML and CSS content dynamically.
 It represents the structure of a web page as a tree of nodes.*/



// Description: Selects a single HTML element by its id.
const title = document.getElementById('tittle')
console.log(title.innerText);


const classes = document.getElementsByClassName('intro')
console.log(classes[0]);


const tags = document.getElementsByTagName('h2')
console.log(tags);


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

const qury = document.querySelectorAll('#btn')

const bten = qury.forEach((btn) =>{
    btn.style.backgroundColor = "black" 
    btn.style.color = "white" 
    btn.style.padding = "10px"
    btn.style.borderRadius = "20px"
})
console.log(bten);// undifined


//innertext 
const innertexts = document.getElementsByTagName('strong').innerText = "change a inner Text in tag"
console.log(innertexts);


//innerHTML 
const innerhtml = document.getElementsByName('password').innerhtml = "<button>done</button>" ;
console.log(innerhtml);

