// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }


//  Nested for loop  example  

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value ${i}`);

    for (let j = 0; j <= 10; j++) {
        console.log(`inner loop value ${j} and inner loop ${i}`);
    }
}
// parent loop  phele ek dafa chali ga then wo child me chala jai ga
//  child pura 10 tak print hoga then wapis parent me jai ga srif  1 dafa
// chali ga phir si child me ajai ga child pura 10 dafa chali ga .
// as tarha hota rahi ga jab tak parent ki condition false ni hoge tab tak
//  parent apni sath child ko bar bar print kari ga 

// table 
for (let i = 1; i <= 5; i++) {
    console.log(`outer loop value ${i}`);
    
   for (let t = 1; t <= 10; t++) { 
    console.log( i + '*' + t + "=" + i * t);
   }
}
//array in loop
let myArray = ["apple" , "mango" ,"orange"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// break and continue

for (let index = 0; index <=20 ; index++) {
    if (index == 5) {
        console.log(`Detected 5 `);
        break
    }
    console.log(`value of i is ${index}`);
}

for (let index = 1; index <=10 ; index++) {
    if (index == 6) {
        console.log(`Detected 6 `);
        continue
    }
    console.log(`value of i is ${index}`);
}

//while loop
let index = 0 ;
while (index <= 20) {
console.log(`value of index  is ${index}`);
index = index +2 ;
}

let array = [ "apple" , "mango" , "orange"]
let arr = 0 ;
while (arr < array.length) {
    console.log(`value is ${array[arr]}`);
    arr++
}
//do while loop
let score = 1
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10)

//for of loop
const arry = [1, 2, 3, 4, 5, 6, 7]
for (const num of arry) {
    console.log(num);
}

const greetings = "Hello world";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// as tareeqi si work ni kar raha he .for of loop object me
// const myObject = {
//     'game1' : "heeloo" ,
//     'game2' : "spiderman",
// }
// for (const  [obj ,value] of myObject) {
//     console.log(obj, value);
// } 

//object in for in loop
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
}
for (const key in myObject) {
    // console.log( myObject[key]); //keys ki value ko exess kara he 
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// arry and for in loop 
const programming = ["js", "rb", "java", "cpp", "py"]
for (const key in programming) {
    console.log(programming[key]);
}
//forEach loop
const coding = ["js", "ruby", "java", "cpp", "python"]
coding.forEach(function (item) {
    console.log(item);
})

// forEach loop and arrow function
const code = ["js", "ruby", "java", "cpp", "python"]
coding.forEach((item) => {
    console.log(item);
})

//array and fuction 
const names = ["html", "css", 'javascript', "reat"]
function printMe(items) {
    console.log(items);
}
names.forEach(printMe)

// foreach loop  
const books = ["html", "css", 'javascript', "reat"]
books.forEach((items, index, arr) => {
    console.log(items, index, arr);
})

const mycodeing = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },

    {
        languageName: "html",
        languageFileName: "index.html",
    },

    {
        languageName: "cascading style sheet",
        languageFileName: "style.css",
    },
]
mycodeing.forEach( (item , index) =>{
    console.log(item.languageName , index);
})
