//Function

//Basic Function
function sayhello() {
    console.log("hi i am function in javascript");
}
sayhello()


function addTwoNumbers(a, b) {
    let add = a + b;
    console.log(add);
}
addTwoNumbers(5, 2)

// return
function add(book1, book2) {
    return book1 + book2
}
console.log(add("urdu , ", 200))

//string interpoloision yani backteks ``
function UserName(UserName) {
    return `${UserName} just login  2:50 pm 2-feb-2025 `
    
}
console.log(UserName("sawera"));

function LoginUser(UserName ) {
    if (!UserName){
        console.log('Wellcome to my application');   
    }
    return `${UserName} just logged in`
}

console.log(LoginUser('hira'));
// console.log(LoginUser());


//bhaut zada amount ya values ko ek he parahmetar me change karna RestOperter si  ... three dots SpreadOperater and RestOperater hoti he
// ... spread operater ni bhaut si values ko array me change kar deya
function calculateCardAmount(...amount) {
    return amount
}
console.log(calculateCardAmount(200, 300, 500, 800, 2000));


// object in function 
const student = {
    userName: 'Jannat',
    age: 5,
}

//funtion ki under object ko exess asi karti he 
function handleObject(exessObject) {
    console.log(`UserName is ${exessObject.userName} and i am ${exessObject.age} year old`);

}
//  handleObject(student) yai ek tareeqa he 

// direct Object be pass kar sakhti he as tarha 
handleObject({
    userName: 'Hira Tahir',
    age: 14,
})


// Array in function 
const MyArray = [200, 100, 500, 600]

function ArrayInFuntion(getArray) {
    return getArray[1]
}
// console.log(ArrayInFuntion(MyArray)) 
// is tarha be exess kar sakhti he or direct array pass kara ki kar sakhti he
console.log(ArrayInFuntion([100, 600, 3000, 5000]));


// block scope and global scope  
//Nested function jo hoti he  apki jo child function he wo parent ki variable  ko exess kar sakhta he 
 function one() {
    const userName = 'sawera'

    function two() {
        const website = 'js'
        console.log(userName);
        // console.log(website);

    }
    //  console.log(website);
     two()
 }
// console.log(userName); error ai ga 
   one()


//   exapmle 
if (true) {
    const userName = 'Javascript' 
    if (userName === 'Javascript') { 
        const website = ' book'
        console.log(userName  + website); // oper ka username exess kar sakhti he
        }
        console.log('please inter true condition');
        }

// Arrow Functions
const ArrowFunction = () => {
    console.log('hello arrowFunction');
}
ArrowFunction()

//parametar ki sath arrow function
const ArrowFunction2 = (num, num2) => {
    return num + num2
}
console.log(ArrowFunction2(10, 15))

//single line arrow function
const singleLine = (add, add2) => (add + add2)
console.log(singleLine("javascript", " series "));

// arrow function me object kasie likhi 
const objInFunction = () => ({
    userName: "object in function"
})
console.log(objInFunction())

// THIS KEY WORD USE IN OBJECT
const grocreyList = {
    fruit: "mango",
    vegtable: "ladyfingar",
    biscutis: "Mari",
    milk: "2 kilo garam ",
    fastFood: " MIcroni",

    myGrocreyList: function () {
        console.log(`${this.milk} milk pack`);
        console.log(this); // THIS  key word ni  pura  current object print kar ki deya he.  
    }},

grocreyList.myGrocreyList() // current condition in milk  print this function
grocreyList.milk = "1 Kilo garam more " // now milk value change this line
grocreyList.myGrocreyList()// again print the current milk value this  line  

// this ka use simple function and arrow function me
function user() {
    console.log(this);
    }
// console.log(user());//  object Global   araha he node.js me  or undefined  answer 

function user2() {
    let username = "kiya this  exess kari ga  username ko ?"
    console.log(username);
    console.log(this.username);
}
console.log(user2());// undefined  answer

const  arrowUser =() =>{
    let username = "arrow function  (this) key exess kari ga  username ko ?"
    console.log(username);//print
    console.log(this.username);//undefined
    console.log(this);//empty {}
    
}
console.log(arrowUser());//undefined answer
console.log(this); //empty

// Note : (THIS)) key words current  value ko exess karta he  node.js me
// globar scope and block scope ka dehan rakhna zaroori he 
// node.js me This key word ka work  current condition ko exess karta he objects me
// function and arrow function me this key word node.js me empty brakets  and undefined deta he 
// this key word Brower me alag tareeqi si  work karta he yani  global object  brower me deta he 


// ager ap jaldi apna function run karwana chhati he  to next line ko follow kari
//Immediately Invoked Function Expressions (IIFE)
//golbal scope ki pullotion si bachni ki leyi () use karti he next line me example he
(function Iife() {
    console.log('Database Connected');
    
})(); 

// arrowfunction in (Iife)
( (names) => {
    console.log(`welcome to Immediately Invoked Function Expressions using ${names}`);
    
})('Arrow Function');


 // --------------------------------end---------------------------------------------

