## objects

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


```