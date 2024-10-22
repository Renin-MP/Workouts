let str = "Hello"
// concat
console.log("concat",str.concat("Good afternoon"));


// length
console.log("length",str.length);



// at
// can accept positive and negative values
console.log("at",str.at(0))

// charAT
console.log("charAT",str.charAt(2));

// charCodeAt
console.log("charCodeAt",str.charCodeAt(1));


// trim
 let str1="       hello     raju      "
// console.log("trim",str1.trim(""));



// trimEnd
console.log(" trimEnd",str1. trimEnd(""));


// trimStart

console.log("trimStart",str1.trimStart());


// replace
console.log("replace",str.replace("l","k"));

    
// replaceAll

console.log("replaceAll",str.replaceAll("l","k"));

// split

let str2="Good moring raju"
console.log("split",str2.split(" "));

//  slice
//  index can be positive or negative 
//  console.log("slice",str.slice(0,2));
// or
console.log("slice",str.slice(-5,-3));


// substring
// index can be only positive
console.log("substring",str.substring(1,4));



// startsWith
// returns boolean
console.log("startsWith",str.startsWith("He"));



// endWith
// returns boolean


console.log("endWith",str.endsWith("llo"));

// padStart

console.log("padStart",str.padStart(20,"qwerty"));

// padEnd

console.log("padEnd",str.padEnd(20,"qwerty"));

// repeat


console.log("repeat",str.repeat(3));


// indexOf

console.log("indexOf",str.indexOf);



//  lastIndexOf 

console.log("lastIndexOf ",str.lastIndexOf ("1"));



// includes
// return boolean

console.log("includes",str.includes("0"));

// toUpperCase

console.log("toUpperCase",str.toUpperCase());

// toLowerCase

console.log("toLowerCase",str.toLowerCase());

// valueOf

let myNum=new Number(14)
// console.log("myNum",myNum);
console.log("valuesOf",myNum.valueOf());

// normalize
// unicode
let greet=`\u0068\u0065\u006c\u006c\u006f\u0020\u0072\u0065\u006e\u0069\u006e`

console.log("normalize",greet.normalize());

























