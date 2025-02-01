//object Literals

//simple object
const object = {
    name: "saweratahir",
    age: 22,
    location: "karachi",
    email: "webdeveloper^&@gmail.com",
    isLoggedIn: true,
    arrys: ['github', 'linkedin', 'deepseek', 'VisalCode'],
    object2: {
        id: 2567,
        phoneNumber: 12345566777,
        Expert: 'javascript',
    }
}
console.log(object);


//object ki keys ko excess kasie kari ?
// 2 type si excess kar sakhti he .

console.log(object.name)
console.log(object["age"]);


//object me symbol ko kasie likhi 
const students = {
    name: 'developer',
    [Symbol.toStringTag]: 'i am symbol in object ',
}
console.log(students.toString()); // 
console.log(typeof students[Symbol.toStringTag]);


//values ko change kasie kari
object.email = 'morning256@gmail.com'
console.log(object.email);
console.log(object);


//object.freeze  si  object me changes ni ho sakhti he or koi error  be ni ai ga 
//Object.freeze(object) // as  method ki baad object me koi change ni ho sakhti he
object.age = 23;
console.log(object); // change ni hoi age  because freeze hua he object

//function in object 
object.greeting = function () {
    console.log('hello function in object');

}
object.greetingTwo = function () {
    console.log(`hello js user ${this.name}`);

}
console.log(object.greeting());
console.log(object.greetingTwo());

//Nested object
//  const userName = new Object() // Singletron object
const studentDetail = { // yai NON-singletron Object he 
    student1: {
        name: 'fatima',
        age: 21,
        marks: {
            Math: 75,
            urdu: 45,
            English: 85,
            computer: 78,
        },
        Total: '85%',
        grage: "A",
        absent: false,

    }
}
console.log(studentDetail.student1.marks.computer);

// 2 object ko 1 object bana deya assign method ni 
const obj1 = { 1: 'A', 2: "B", 3: "C" }
const obj2 = { 4: 'D', 5: "E", 6: "F" }
// const obj3 = Object.assign( obj1,obj2) // JOIN KARNI KI LEYI  ASI BE KAR SAKHTI HE 
const obj3 = { ...obj1, ...obj2 } // esay tareeqa use karni ka 
console.log(obj3);

//array  and object 
const items = [
    {
        id: 1,
        age: 17,
    },
    {
        id: 2,
        age: 66,
    },
    {
        id: 3,
        age: 22,
    },
    {
        id: 4,
        age: 25,
    },
    {
        id: 5,
        age: 23,
    },
    {
        id: 6,
        age: 9,
    }
]
console.log(items[3].age);

// object ki keys or values be nikal sakhti he 
console.log(object);
console.log(Object.keys(object));
console.log(Object.values(object));

// differents between  
// . entries change in to  array 
// fromEntries  change in object 

//entries 
console.log(Object.entries(object)); //array me change hojai key values ki sath

//fromEntries
const arr = [["name", "sawera"],["age", 23],["city", "Karachi"]]
console.log(arr);
console.log(Object.fromEntries(arr));


//hasOwnProperty 
console.log(object.hasOwnProperty('age')); // object me dekhna cahti ho ki yai wali property he tu yai method run hoga

const user = {
    name: "Alice",
    age: 25
};

//    Example 
// Seal the object
Object.seal(user);

// ✅ Modification of existing properties is allowed
user.age = 30;
console.log(user.age); // 30

// ❌ Adding new properties is not allowed
user.email = "alice@example.com";
console.log(user.email); // undefined

// ❌ Deleting existing properties is not allowed
delete user.name;
console.log(user.name); // "Alice"

// ✅ Check if an object is sealed
console.log(Object.isSealed(user)); // true


// is 
console.log(Object.is(0,0));
console.log(Object.is(NaN === NaN));
console.log(Object.is('heelo' === 'world'));
console.log(Object.is( 0 === 0));
console.log(Object.is( undefined , undefined )); //true
console.log(Object.is(undefined === undefined));// false
console.log(Object.is(1 , 1));



// yai methods abhi karni he 

/* . Prototype & Property Descriptor Methods
Object.getPrototypeOf(obj) → Returns the prototype of an object.
Object.setPrototypeOf(obj, prototype) → Sets the prototype of an object.
Object.getOwnPropertyDescriptors(obj) → Returns descriptors for all properties.
Object.getOwnPropertyDescriptor(obj, prop) → Returns a descriptor for a specific property.*/
