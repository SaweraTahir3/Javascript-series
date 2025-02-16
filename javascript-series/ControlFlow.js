// Control Flow 

//operetors use in if and else  condition 

// ===  check value or  type of 
// == simple value check 
// > gearter than
// < Less than 
// >= greaterthen and equal to  (yani bara he  or barabar  he )
// <= Lessthen and equal to (yani chota he ya barabar he)
// != not equal and (barabar)
// !== not equal and (type be check )


// if 
if (2 >= 2) {
    console.log('executed');
}

//if and else 
if (100 <= 95) {
    let power = "Oustanding Work in Javascript ";
    console.log(`Feedback in your work : ${power}`)
}
else {
    console.log('Sorry Try again and check your feed back');
}

const balance = 1000;

// if (balance >= 500)  console.log("not a good practice"); yai good practice ni he


//nested if else 
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 870) {
    console.log("less than 870");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// Logical Operters
const userLogIn = true;
const debitCard = true;
if (userLogIn && debitCard) { // dono condition true honi chaiyi 
    console.log("Allow to buy course");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true
if (loggedInFromGoogle || loggedInFromEmail) { // ek condition true hona chaiyi 
    console.log("user Logged In ");
}

//Nullish Coalescing Operator (??) :null undefined 
let val1 ;
val1 = 15 ?? 20 
val1 = null ?? 25
val1 = undefined ?? 20
val1 = " " ?? null

console.log(val1);

//terniray operator 
// condition ? true : false ;

const  iceTeaprice = 500 ;
 let terniary = iceTeaprice >=  100  ? "wait iceTea is ready" : "plz give me more rupeees"
console.log(terniary);

//Switch case 
const month = 1
switch (month) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('feburary');
        break;
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;

    default:
        console.log("default case match");
        break;
}

//Truthy values 

// "0"
// "false"
// "  " (space de deti he tu be truly value he)
// []
// {}
// function(){}

//Examples of truly values 
//false == 0 answer(true)
//false == ''answer(true)
//0 ==''answer(true)

//  falsy values 
// false 
// 0 
// -0
// BigInt 0n (bigInt me 0n ata he wo false value hoti he)
// "" (empty string  be false value he)
// null
// undifined
//NaN (Note a number)

//array check in condition
 const arry = []
 if (arry.length === 0) {
    console.log("array is empty");  
 }

//object check in condition 
const obj = {}
if (Object.keys(obj).length === 0 ) {
    console.log("object in empty");
}
