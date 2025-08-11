// interview question

// getOwnPropertyDescriptor  yai property kuch hide chezo ki bari me baa ti he 
Object.getOwnPropertyDescriptor(Math , "PI")



const mynewobj ={
    name :"newObject" ,
    isAvliable :"true" ,
    feeback :"good",
    ordernow : function(){
        console.log('print hogaya');
        
    }

}
console.log(Object.getOwnPropertyDescriptor(mynewobj,  "name")); //check answer

Object.defineProperty(mynewobj , "name", {
 writable : false ,
 enumerable : false
})

for (let [key , value] of Object.entries(mynewobj)) {
 if(typeof value !== "function"){
     console.log(`${key} , ${value}`);
    
 }
    
    
}
