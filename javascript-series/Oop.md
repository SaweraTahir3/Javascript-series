
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

```

## Constructor function

```javascript
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
## function in object & importants of (new) key word

```javascript
 function  multipleName(num){
    return num*5
}

multipleName.power = 2

console.log(multipleName(5))
console.log(multipleName.power) //javascript me  function at the end object he hoti he 
console.log(multipleName.prototype) //ek function ko ham object ki tarha be use kar sakhti he

 function createUser(username,score){
 this.username = username
 this.score = score
 }
 createUser.prototype.increment = function({
    this.score++
 })

 createUser.prototype.printMe = function(){
    consle.log(`score is ${this.score}`)
 }
 const chai =  new createUser("saawera" , 95)
 const code = new createUser("fatima" , 99)

 chai.printMe()


/* Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
    */
```
