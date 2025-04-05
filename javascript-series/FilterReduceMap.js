//ForEach
// ForEach loop return kuch ni karta he srif value print hoti he 
const coding = ["javascript" , "java" ,"python" ,"c++" ,"angular"]

const values = coding.forEach( (item) =>{
    console.log(item);
    // return item  (foreach loop return ni karta he kuch be)
})

//filter()
const myNum = [1,2,3,4,5,6,7,8,9,10]
let value =myNum.filter( (num) =>{ return num >= 5})
console.log(value);

// object with filter methods
const booksName = [
    {
       title: "bookone" , genre : "fiction" , publish : 1981, edition :2004
    },
    {
        title: "booktwo" , genre : "NOn-fiction" , publish :2000, edition :2008
     },
     {
        title: "bookthree" , genre : "History" , publish :2009, edition :2004
     },
     {
        title: "bookfour" , genre : "fiction" , publish :1986, edition :2009
     },
     {
        title: "bookfive" , genre : "History" , publish :1999, edition :2011
     },
]
// const userBooks = booksName.filter( (bk) => bk.genre === "History")

const userBooks = booksName.filter((bk)=> { return bk.publish >= 2000 && bk.genre === "History" })

console.log(userBooks);

//map()
const myNumber = [1,2,3,4,5,6,7,8,9,10]
// let store = myNumber.map( (num ) => num  + 10)
// console.log(store);

// cheening yani ek sath methods use kar sakhti  he 
const  newnums = myNumber
    .map((num) => num * 10 )
    .map((num) => num + 1)
    .filter((num)=>{ return num <= 40})
console.log(newnums);

//reduce method
const  myReduceArray = [ 1,2,3,4 ,5 ]
const  reduceMethod =  myReduceArray.reduce( function(acc, current) {
    // console.log(`acc : ${acc} and current value  : ${current}`);
    return acc + current ;

}, 0)
console.log(reduceMethod);

//Example
const shoppingCard = [
    {itemName : "javascript Course " ,
        price : 5000 ,
    },
    {itemName : "Html Course " ,
        price : 2000 ,
    },
    {itemName : "React Course " ,
        price : 3899 ,
    },
    {itemName : "javascript Course " ,
        price : 4500 ,
    },
]
 const Total = shoppingCard.reduce(( acc ,item )=> acc + item.price  
  ,0 ) 
 console.log(Total);
 
