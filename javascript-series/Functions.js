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

