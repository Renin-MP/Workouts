// destruring objects


let person= {
    
fName:"sunny",
lName:"kutty",
age:19,

address:{
    city:"lextas",
    pincode:636363

},



hobbies:["travel","swimming","reading"]

}

let {fName,lName,age,address,hobbies}=person
let{city,pincode}=address

console.log("fName",fName);
console.log("lName",lName);
console.log("age",age);
console.log("address",address);
console.log("city",city);
console.log("pincode",pincode);
console.log("bobbies",hobbies);

// same key in different objects=> use alias name

let person1={
     
    fName:"johny",
    lName:"jose",
    hobbies:["Netflix"]

}

let {fName:person1Fname,lstName ,hobbies:person1hobbies}=person1
// destructuring hobbies Array from person1
let [hobperson1]=person1hobbies
console.log("person1Fname",person1Fname);
console.log("person1hobbie",person1hobbies);
console.log("person1Hobbies",person1hobbies);
console.log("hobperson1",hobperson1);




// array

let fruits=["apple","orange","kiwi","mango"]
let[fruit1,,fruit2]=fruits

console.log("fruit1",fruit1);
console.log("fruit2",fruit2);









