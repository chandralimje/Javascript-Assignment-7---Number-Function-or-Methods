// 1.  setTimeout =>

// setTimeout(() => {
//     console.log("Hello")
// }, 2000);
// console.log("test")

// // 2.  setInterval =>

// setInterval(() => {
//     console.log("Yahoo")
//     console.log("Hi")
// }, 3000);

console.log(
  "-------------------------- Number Function/Methods --------------------------"
);
console.log("");

let number = 160.69;

console.log(number);
console.log(number.toString()); //convert the number into string - "160.69"
console.log(number.toPrecision(7)); //exact length of number - 160.6900
console.log(Number(number)); // 160.69
console.log(parseInt(number)); // 160
console.log(parseFloat(number)); // 160.69

let data = "BALA";
console.log(Number(data)); // Nan
console.log(isNaN(data)); // true

// --------------------------------------------------------------------
console.log("");

// 1.  Math.abs() -> absolute number - removes negative signs
console.log(Math.abs(-17.2987)); // 17.2987

// 2.  Math.ceil() -> next integer number
console.log(Math.ceil(66.78)); // 67

// 3.  Math.floor() -> removes flooting point and gives the integer
console.log(Math.floor(55.3)); // 55

// 4.  Math.log() -> returns log of given number
console.log(Math.log(23)); // 3.1354942159291497

// 5.  Math.min() -> returns the minimum number
console.log(Math.min(16, 84, 63, 29, 14)); // 14

// 6.  Math.max() -> returns the maximum number
console.log(Math.max(4, 72, 95, 188, 56, 14)); // 188

// 7.  Math.pow() -> calculate power of given digit (base, exponational)
console.log(Math.pow(5, 3)); // 5 * 5 * 5 = 125

// 8.  Math.random() -> 0-1 generate a random number between 0 to 1
console.log(Math.random() * 55);

console.log("");
console.log(
  "-------------------------- String Function/Methods --------------------------"
);

// 1.  length - finding the length of the string:
var str = "this string has 29 characters";
console.log(str.length); // 29

// 2.  trim() - removing white space
var str = "  this string has 29 characters";
console.log(str.trim()); // this string has 29 characters

// 3.  includes() - check if string contains substring:
var str = "Youtube Videos";
var bh = "Youtube";
var dl = "movie";
console.log(str.includes(bh)); // true
console.log(str.includes(dl)); // false

// 4.  indexof() - find the index of a substring:
var pop = "facebook community";
console.log(pop.indexOf("facebook")); // 0
console.log(pop.indexOf("videos")); // -1

// 5.  toUpperCase() - capitalizes entire string:
var str = "maxotag technology";
console.log(str.toUpperCase()); // MAXOTAG TECHNOLOGY

// 6.  toLowerCase() - Lower cases entire string:
var str = "MaXotAg teChNolOgY";
console.log(str.toLowerCase()); // maxotag technology

// 7.  replace() - replaces strings with new values:
var str = "sunlight technology";
console.log(str.replace("sunlight", "maxotag")); // maxotag technology

// 8.  slice() - return a section of a string:
var str = "twitter blog";
console.log(str.slice(5)); // er blog

// 9.  split() - convert string into on array of strings:
var str = "infosys company";
console.log(str.split(" ")); // ["infosys", "company"]

// 10.  repeat() - repeat a string a specified number of times:
var str = "TCS consultancy. ";
console.log(str.repeat(3)); // TCS consultancy. TCS consultancy. TCS consultancy.

// 11.  match() - returns array of matching strings:
var str = "maxotag technology";
console.log(str.match("maxotag")); // ["maxotag"]

// 12.  charAt() - returns the character at an index:
var str = "infosys company";
console.log(str.charAt(5)); // y

// 13.  charCodeAt() - return the nuicode at an index:
var str = "Test";
console.log(str.charCodeAt(0)); // 84

// 14.  concat() - adding the two string:
var str = "TCS consultancy ";
var str1 = "data";
console.log(str.concat(str1)); // TCS consultancy data

// 15.  search() - find the string:
var str = "corporate banking";
console.log(str.search("banking")); // 10

// 16.  substring() - extracts the characters from a string:
var str = "facebook community";
console.log(str.substring(3, 6)); // ebo

// 17.  startsWith() - check if a string starts with:
var str = "Tops technology";
console.log(str.startsWith("Tops")); // true

// 18.  endsWith() - check if a string ends with:
var str = "Tops technology";
console.log(str.endsWith("technology")); // true

// 19.  LastIndexOf() - returns the position of the last accurrence of a specified value in a string:
var str = "maxotag technology";
console.log(str.lastIndexOf("technology")); // 8
// -------------------------- Date Methods --------------------------
// Date Object  =>

// setInterval(() => {
//     let d = new Date();
//     console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
// }, 3000)


// console.log(d.getFullYear())
// console.log(d.getHours())

// Get Methods  =>
// getFullYear(); // get the year as a four digit number (yyyy)
// getMonth() // get the month as a number (0-11)
// getDate() // get the day as a number (1-31)
// getHours() // get the hour (0-23)
// getMinutes() //get the minute (0-59)
// getSeconds() //get the second (0-59)
// getMilliseconds() //get the millisecond (0-999)
// getTime() //get the time (milliseconds since January 1, 1970)
// getDay() // get the weekday as a number (0-6)
