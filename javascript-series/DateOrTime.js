//Date or Time

// The current date and time .

let now = new Date();

console.log(now.getFullYear()); // Current year
console.log(now.getMonth());    // Current month (0-11)
console.log(now.getDate());     // Day of the month (1-31)
console.log(now.getDay());      // Day of the week (0 = Sunday, 6 = Saturday)


// Date Methods

console.log(now.toString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());
console.log(now.toDateString());


let createdDate = new Date(2002, 3, 15)
console.log(createdDate.toLocaleDateString());
console.log(createdDate.toDateString());

// let dated = new Date(2025 , 0  , 21 , 5 ,30);
let dated = new Date("01-21-2025");
console.log(dated.toLocaleString());

//Time 

let date = new Date()
console.log(date.getHours());   // Hours (0-23)
console.log(date.getMinutes()); // Minutes (0-59)
console.log(date.getSeconds()); // Seconds (0-59)
console.log(date.getMilliseconds()); // Milliseconds (0-999)
console.log(date.toLocaleTimeString()); //time fix

// examle
const date1 = new Date('2025-01-01');
const date2 = new Date('2025-01-25');
const timeDiff = date2 - date1; // Difference in milliseconds
const daysDiff = timeDiff / (1000 * 60 * 60 * 24); // Convert to days
console.log(daysDiff); // Difference in days

//Time Methods 

let seet = new Date();
console.log(seet.setFullYear(2025));
console.log(seet.setHours(11));
console.log(seet.setMilliseconds(25));
console.log(seet.setMinutes(40));
console.log(seet.setMonth(0));
console.log(seet.setDate());


console.log(seet.getFullYear());
console.log(seet.getHours());
console.log(seet.getMilliseconds());
console.log(seet.getMinutes());
console.log(seet.getMonth());
console.table([`current year ${seet.getFullYear()} set Hours ${seet.getHours(11)}   set  MilliSeconds ${seet.getMilliseconds(25)} 
     set Minutes ${seet.getMinutes(40)}  current Month ${seet.getMonth()}`])





