
class  Clint {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is : ${this.username}`);
        
    }
}
console.log(Clint.logMe());

class Admins extends Clint {
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }
    AddProduct(){
        console.log(` A new product was added by ${this.username}`);
        
    }
}
const  User1 = new Admins("admin" , "admin@gmail.com " , "123")
User1.AddProduct()
User1.logMe()

// console.log(User1.logMe()); // check  true
// console.log(User1.AddProduct()); //check false 


const User2 =  new Clint("i am clint")
User2.AddProduct()
User2.logMe()

// console.log(User2.AddProduct()); // check please 
// console.log(User2.logMe()); // check please 
 
console.log(User1 === User2); // false
console.log(User1 instanceof Admins); //true


