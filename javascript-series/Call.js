// call method

function setUserName(username){
    this.username = username
    console.log("called");

}

 function  createuser(username , email , password){
    setUserName.call( this , username) // oper wali  this si yaha this me pass hua he username  phir add hua he object me 
    this.email = email
    this.password = password

 }

 const  called =  new createuser("sawera" , "developer@gmail.com" ,"codingLover")
 console.log(called);
 