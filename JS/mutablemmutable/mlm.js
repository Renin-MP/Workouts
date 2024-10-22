// primitive datatypes are immutable
let a=10 
console.log("a",a);


let b=a
console.log("b",b);

a=30
console.log("a after change",a);
console.log("b after change",b);
console.log("=================");




// ////////////////////////////////////////////////////
// array

let fruits=["apple","kiwi","mango","grapes"]
// never  take  a copy like this
//  let fruitscopy=fruits
// instead use spread or slice=>shallow coppy
// let fruitscopy=[...fruits]
// oR

let fruitscopy=fruits.slice(0)
console.log("fruits",fruits);
console.log("fruitscopy",fruitscopy);

fruits[1]="orange"
console.log("fruits after change",fruits);
console.log("fruitscopy after change",fruitscopy);

////////////////////////////////////////
console.log("=========================");


// object

let person={

    fName:"raju",
    lName:"ks",
    age:18

}
// never copy an object like this
// let personcopy=person
// instead use spread or object.assign()=>shallow copy
// let personcopy={...person}
// OR

let personcopy=Object.assign({},person)
console.log("person",person);
console.log("personcopy",personcopy);


person.fName="vijay"
personcopy.lName="sk"
console.log("person after chnage",person);
console.log("personcopy after chnage",personcopy);












