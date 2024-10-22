// primitive 
//  to store data in local storage
localStorage.setItem("uName","Raju")
localStorage.setItem("age",18)


// to data from local storage 

let uNameFormLS=localStorage.getItem("uName")
console.log("uNameFormLS",uNameFormLS);

let ageFormLS=localStorage.getItem("age")
console.log("ageFormLS",ageFormLS);

// non primitive

// array 
let mobiles=["iphone","oppo","realme","oppo","vivo"]
localStorage.setItem("mobiles",JSON.stringify(mobiles))

let mobilesFormLS=JSON.parse(localStorage.getItem("mobiles"))
console.log("mobilesFormLS",mobilesFormLS);

// object

let watch={
    brand:"Titan",
    price:32000,
    color:"Red"
}
localStorage.setItem("wtach",JSON.stringify(watch))
let watchFormLS=JSON.parse(localStorage.getItem("watch"))
console.log("watchFormLS",watchFormLS);

// to remove specific key \ item 
// localStorage.removeItem("uName")


// clear localStorage
// localStorage.clear