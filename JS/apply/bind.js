// bind
let person={
    fName:"Raju",
    lName:"KS",
    fullName:function(age,eyecolor){
        return this.fName+' '+this.lName+' '+age+''+eyecolor
    }
}

// console.log("person fullName",person.fullName(18,'Red'));


let person1={
    fName:"James",
    lName:"Gowda",

}

// personfullName is function which can be called later to
// get the fullName of person

let mobile={
    brand:"Poco",
    price:12000, 
    color:"Yellow",
    storage:"128Gb",
    brandPrice:function(){
        return console.log(this.brand+' '+this.price);
        

    }
}

// console.log("mobilesDetails",mobile.brandPrice());

//  setTimeout (mobile.brandPrice,2000)//undefined
// as this is lost becuase of setTimeout callback
// to fix this issue
// use bind()

let bindMobileDetails= mobile.brandPrice.bind(mobile)
setTimeout(bindMobileDetails,2000)
