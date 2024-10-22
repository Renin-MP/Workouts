// apply
let person={
    fname:"raju",
    lname:"gowda",
    fullName:function(age,eyeColor){
        return this.fname+" "+this.lname+''+age+''+eyeColor
    }
}
console.log("personFullName",person.fullName(20,'pink'));
//apply( ) can be used to  reuse the fullName Function from person
//for person1 and person2 , apply() can accept argumnets in an array

let person1={
    fname:"suma",
    lname:"kumari"
}
console.log("person1 fullName",person.fullName.apply(person1,[18,"green"]));

let person2={
    fname:"gova",
    lname:"vardhan"
}
console.log("person2  fullname",person.fullName.apply(person2,[19,"red"]));