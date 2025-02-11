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

 // --------------------------------end -------------------------------------------

