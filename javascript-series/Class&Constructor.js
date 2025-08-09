// Class Constructor 

class User {
    constructor(username , email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encrptPassword(){
        return `${this.password}123`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    } 

}
const detailOne = new User("constructor ho" , "classConstructor@gmail.com" , "javascript")
console.log(detailOne);
console.log(detailOne.encrptPassword());
console.log(detailOne.changeUserName());

//behind the seen 

function User(username , email, password){
     this.username = username
        this.email = email
        this.password = password
    }
    User.prototype.encrptPassword = function(){
         return `${this.password}123`
    }
    User.prototype.changeUserName = function(){
         return `${this.username.toUpperCase()}`
    }

    const  detailTwo = new User("function ho" , "function2gmail.com" , "javascript")
    console.log(detailTwo);
    console.log(detailTwo.encrptPassword());
    console.log(detailTwo.changeUserName());
    
    
    