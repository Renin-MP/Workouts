// primitive 
//  to store data in local storage
sessionStorage.setItem("uName","Raju")
sessionStorage.setItem("age",18)


// to data from local storage 

let uNameFormLS=sessionStorage.getItem("uName")
console.log("uNameFormLS",uNameFormLS);

let ageFormLS=sessionStorage.getItem("age")
console.log("ageFormLS",ageFormLS);

// non primitive

// array 
let mobiles=["iphone","oppo","realme","oppo","vivo"]
sessionStorage.setItem("mobiles",JSON.stringify(mobiles))

let mobilesFormLS=JSON.parse(sessionStorage.getItem("mobiles"))
console.log("mobilesFormLS",mobilesFormLS);

// object

let watch={
    brand:"Titan",
    price:32000,
    color:"Red"
}
sessionStorage.setItem("wtach",JSON.stringify(watch))
let watchFormLS=JSON.parse(sessionStorage.getItem("watch"))
console.log("watchFormLS",watchFormLS);

// to remove specific key \ item 
// sessionStorage.removeItem("uName")


// clear sessionStorage
// sessionStorage.clear