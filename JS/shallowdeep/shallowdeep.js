let person={
    fName:"james",
    lName:"ks",
    address:{
        city:"pune",
        pincode:12345
    }
}

// deep copy
// js obj => stringfied obj
// let stringfiedpersonobj=JSON.stringify(person)
// stringfied obj => js obj
// let jersonobjspcopy=JSON.parse(stringfiedobj)
// OR
let Jersonobjcopy=JSON.parse(JSON.stringify(person))

person.fName="Ajay"
person.address.city="Delhi"

console.log("person after change",person);
console.log("Jersonobjcopy after change",Jersonobjcopy);


