// getter and setter 

/*1. Getter kya hota hai?
Getter ek method hota hai jo private ya restricted property ka value read karne ke liye use hota hai.

Iska naam usually getSomething() hota hai.

Getter ka kaam sirf data ko return karna hota hai. */


/* . Setter kya hota hai?
Setter ek method hota hai jo private ya restricted property ka value set/update karne ke liye use hota hai.

Iska naam usually setSomething(value) hota hai.

Setter me hum value ko set karne se pehle validation ya rules apply kar sakte hain.

 */

class User {
    constructor(email, password){
        this.email = email 
        this.password = password
    }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    this._email = value
  }


    get password(){
        return this._password.toUpperCase() 
    }
    set password(value){
        this._password = value
    }
}

const store = new User("example1@gmail.com" , "abc123") 
console.log(store.password);


// getter and setter in function

function User(email , password){
this.email = email
this.password = password
}
 
Object.defineProperty(this ,  "email",{
    get : function(){
        return this._email.toUpperCase()
    } ,
    set : function(value){
        this._email = value ;
    },
})
    Object.defineProperty(this ,  "password",{
    get : function(){
        return this._password.toUpperCase()
    } ,
    set : function(value){
        this._password = value ;
    },

})
const stored = new User("example2@gmail.com" , "xyz123")
console.log(stored.email);
console.log(stored.password);


//getter setter in object 
 const user3 =  {
    _email : "user3@gmail.com" ,
    _password : "javascript" ,

get email(){
    return this._email.toUpperCase()
  } ,

  set email(value){
    this._email = value
  }, 

     get  password(){
        return this._password.toUpperCase() 
    } ,
    set  password(value){
        this._password = value
    }
 }
