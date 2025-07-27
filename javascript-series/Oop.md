
## javascript and classes

## Oop (object oriented progaraming)


 ## Object
 - collection of properties and methods
 - toLowerCase

  ## why use OOP 

 ## parts of OOP

 - Object literal
 - Constructor function
 - Prototypes
 - Classes
 - Instances (new, this)

 ## 4 pillars
- Abstraction 
- Encapsulation 
- Inheritance 
- Polymorphism

```javascript 
//Object literal

//use this (current context)
 const user {
    username :"sawera" ,
    logIn : true ,
    marks: 96 ,
 getStudentMarks : function(){
    console.log("get marks in javascript")
    console.log(this.username)
    console.log(`i am ${this.username} i am login ? ${this.logIn} and my javascript quiz marks {this.marks}`)
 }

 }
 console.log(user.username) //error
console.log(user.getStudentmarks())
console.log(this) // brower me  window  ati he node me empty {} ata he answer



// next topi 
//Constructor function

//  (new)  Constructor function ha Allow karta he ek he object literls multiple intance bana sako

function user(username , logInCount ,logedIn){
  this.username = username
  this.logedInn = logedIn 
  this.logInCounted = logInCount 
  this.greeting = function(){
    console.log("welcome ${this.username}")
  }

  return this
}
const userdata = user("sawera" ,5, true ) //check console.log
const userdata2 = user("Fatima" ,0, false , )

console.log(userdata) // data overwrite hoga  code kharab hojaia ga 
// console.log(userdata2)

// new key word data ko overwirte ni honi dega alag alag copys de ga check console
const userdataa = new  user("sawera" ,5, true ) 
const userdataa2 = new user("Fatima" ,0, false , )

console.log(userdataa)
console.log(userdataa2)
//  note : Constructor function hamisha new intance deta he 

// new key word ki points 
// 1  jasi new key word use kari gi empty object create hota he empty object ko intance  bolti he
// 2  Constructor function call hota he new key word  ki wajah si
// 3  Constructor function jo arguments he wo sab pack kar ki deta he this ko 
// 4  this hami deta he answer

```