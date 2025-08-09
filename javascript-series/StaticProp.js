 class  User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME : ${this.username}`); 
    }
     static createdId(){
        return `00421`
    }
 }

 const Userdetail = new User("sawera")
 console.log(Userdetail.createdId());
 
 class Teacher extends User {
    constructor(username , email){
        super(username) 
        this.email = email 
    }
 }
 const iphone = new Teacher("iphone" , "iphone@gmail.com")
 console.log(iphone);
 