// Datatype in javascript 

//  Two type of Datatypes

// . Primitive Datatype
// . non Primitive Datatype

// This is primitive datatype:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbols
// 7. BigInt

// . non Primitive Datatype
//  object

"use strick";

let name = "string ho me"; //string
let age = 22               //number
let UseCodeSpaces = true; //boolean
let saveData = null;       //null
let declearData = undefined; //undefined
let bigNumbers = 1234747558855555390920200202022n; //bigInt
let sym = Symbol("This is my symbol value"); //Symbol

console.table([name, age, UseCodeSpaces, saveData, declearData, bigNumbers, sym])


//typeof 

// . check the type of value for this  keyWord  (typeof)

console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (UseCodeSpaces));
console.log(typeof (saveData));
console.log(typeof (declearData));
console.log(typeof (bigNumbers));
console.log(typeof (sym));


//Conversion  & examples of datatypes .

// . string value change into number
let marks = "98";

console.log(marks);
console.log(typeof (marks));

let valueChangeInNumber = Number(marks);

console.log(valueChangeInNumber);
console.log(typeof (valueChangeInNumber));


// . Number value change in to string?
let price = 45000;

console.log(price);
console.log(typeof (price));

let valueChangeInString = String(price);

console.log(valueChangeInString);
console.log(typeof (valueChangeInString));


// .Boolean change in to string and number
let SignInAccount = false;

console.log(SignInAccount);
console.log(typeof (SignInAccount));

let valueChangeInNumbers = Number(SignInAccount);

console.log(valueChangeInNumbers);
console.log(typeof (valueChangeInNumbers));

//string 
let valueChangeInStrings = String(SignInAccount);

console.log(valueChangeInStrings);
console.log(typeof (valueChangeInStrings));


// . null change into string and number
let empty = null;

console.log(empty);
console.log(typeof (empty));

let valueChangeInNum = Number(empty);

console.log(valueChangeInNum);
console.log(typeof (valueChangeInNum));

//string
let valueChangeInstr = String(empty);

console.log(valueChangeInstr);
console.log(typeof (valueChangeInstr))


// . undefined change into string and number
let under = undefined;

console.log(under);
console.log(typeof (under));

let valueChangeInundefined = Number(under);

console.log(valueChangeInundefined);
console.log(typeof (valueChangeInundefined));

// . BigInt change in number
let bigNum = 1234747558855555390920200202022n;

console.log(bigNum);
console.log(typeof (bigNum));

let valueChangeInbig = Number(bigNum);

console.log(valueChangeInbig);
console.log(typeof (valueChangeInbig));

// . BigInt change in string
let bigstri = 1234747558855555390920200202022n;

console.log(bigstri);
console.log(typeof (bigstri));

let valueChangeInstri = String(bigstri);

console.log(valueChangeInstri);
console.log(typeof (valueChangeInstri));

//. symbol
const sym1 = Symbol("symbol change in string");

console.log(String(sym1));      
console.log(sym1.toString());  


// NAN
//Not a number
let notnumber = '2525abcccc' ;
let change = Number(notnumber)
console.log(change);
console.log(typeof (change));


//------------------String Methods------------------------ //


// charAt(index): Returns the character at the specified index.

let retured  = 'javascript-series' ;
console.log(retured.charAt(3));

// charCodeAt(index): Returns the Unicode of the character at the specified index.

let Unicode = 'javascript-series by sawera tahir';
console.log(Unicode.charCodeAt(3));

// indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string.

console.log(Unicode.indexOf('s'));
console.log(Unicode);


// concat(string1, string2, ...): Combines two or more strings and returns a new string.

let student = 'FullStrack developer';
let name0 = ' Sawera Tahir 2025';
console.log(student.concat(name0));


// includes(searchString, position): Determines whether a string contains the characters of a specified string.

let topic = 'javascript-Series 2025' ;
console.log(topic.includes('javascript'));


// endsWith(searchString, length): Determines whether a string ends with the characters of a specified string.

let andthing = 'hello world' ;
console.log(andthing.endsWith('world')); //true

// lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string.
console.log(andthing.lastIndexOf('world'));

// localeCompare(compareString): Compares two strings in the current locale.

 let compareStrings = 'javascript' ;
 let  compareString2 = 'react' ; 
 console.log(compareStrings.localeCompare(compareString2));//javascript si phele react he   (no) -1
 console.log(compareString2.localeCompare(compareStrings));//react si phele javascript he (true) 1
 

//  replace(searchValue, newValue): Returns a new string with some or all matches of a pattern replaced by a replacement.

console.log(value.replace('2024',2025));


// search(regexp): Executes a search for a match between a regular expression and this String object.

let searchvalue = 'sawera tahir' ;
console.log(searchvalue.search('t')); //index number nikal ki de ga


// slice(beginIndex, endIndex): Extracts a section of a string and returns it as a new string.

let peace = 'freelancer  number one full Strack Developer  in pakistan iss  SaweraTahir  2025';
console.log(peace.slice(0 , 90));


// split(separator, limit): Splits a string into an array of substrings.

let splied = 'full Strack and mern strack .';
console.log(splied.split());


// startsWith(searchString, position): Determines whether a string begins with the characters of a specified string.

console.log(splied.startsWith('mern strack' , 16 ));


// substring(indexStart, indexEnd): Returns a new string that is a substring of the original string.

let sub = 'hello world';
console.log(sub.substring(0,12));


// toLowerCase(): Returns the calling string value converted to lowercase.

let lower = ' CHANGE IN TO LOWERCASE'
console.log(lower.toLocaleLowerCase());


// toUpperCase(): Returns the calling string value converted to uppercase.

let uppercase = 'change in to uppercase'
console.log(uppercase.toLocaleUpperCase());
 

// trim(): Removes whitespace from both ends of a string.

let remove = '         sawera tahir';
console.log(remove);
console.log(remove.trim());


// trimStart(): Removes whitespace from the beginning of a string.

console.log(remove);
console.log(remove.trimStart());


// trimEnd(): Removes whitespace from the end of a string.

console.log(remove);
console.log(remove.trimEnd());

// valueOf(): Returns the primitive value of a String object.

let strObj = new String("Hello, world!");
let primitiveValue = strObj.valueOf(); // Retrieves the primitive value
console.log(primitiveValue); 


// repeat(count): Returns a new string with a specified number of copies of the string (ES6).

let repeat1 = 'strings methods , '
console.log(repeat1.repeat(6));


// padStart(targetLength, padString): Pads the current string with another string (the second argument) until the resulting string reaches the given length (ES8).

let pad = ' thek he ' 
console.log(pad.padStart(36 , ' repeat ho me,'));

// padEnd(targetLength, padString): Pads the current string with another string (the second argument) until the resulting string reaches the given length (ES8).

let end = 'padend ho meri end sentences me kuch be'
console.log(end.padEnd(65 , ' add karlo '));

/* -------------------------------------------*****************************************------------------------------------------------------*/

// Note : non-primitive-datatype next class Topic


