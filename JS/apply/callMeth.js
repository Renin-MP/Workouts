let person={
    fname:"raju",
    lname:"gowda",
    fullName:function(age,eyeColor){
        return this.fname+" "+this.lname+''+age+''+eyeColor
    }
}
console.log("personFullName",person.fullName(20,'pink'));
//call( ) can be used to  reuse the fullName Function from object to inside another object
//for person1 and person2 , call() can accept argumnets

let person1={
    fname:"suma",
    lname:"kumari"
}
console.log("person1 fullName",person.fullName.call(person1,18,"green"));
let person2={
    fname:"gova",
    lname:"vardhan"
}
console.log("person2  fullname",person.fullName.call(person2,19,"red"));