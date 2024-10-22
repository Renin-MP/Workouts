// set
//  A javascript set is a collection of unique values .
//  Each values can only occur once in a set 
//  The values can be of any type, primitive values or objects.

let mySet = new Set(["a","b","c","d","e"])
mySet.add("d")
mySet.add("e")
mySet.add("d")
console.log("mySet",mySet);




//////////////////////////
// Map
//   A Map holds key - value paris where the keys can be any datatype 
//  A Map remembers the orginal intertion order of the keys

//  Create a Map

const fruits = new Map ();
//  set Map values
fruits.set("apple",500);
fruits.set("ornage",400);
fruits.set("mango",300);
fruits.set("banans",200);
console.log("fruits",fruits);
console.log("fruits size",fruits.size);

//  to get  the values 
console.log("apple",fruits.get("apple"));

//  has()=> to check the key is present or not in a Map

console.log("orange present ?",fruits.has("orange"));

//  to delete bananas 
fruits.delete("banans")
console.log("fruits after delete ",fruits);

//  to clear the Map
fruits.clear()
console.log("fruits after clear ",fruits);


 

