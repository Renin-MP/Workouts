// Array
let cars=["bmw","alto","nexon","urus"]
// shallow coppy
let carsCoppy=[...cars]
console.log("carsCoppy",carsCoppy);


// to merge multiple arrays

let nums=[10,20,30,40,50]
let carsNumscoppy=[...cars,...nums]
console.log(" carsNumscoppy", carsNumscoppy);

// object

let person={
    fNmae:"Renin",
    lName:"mp",
    age:24

}
let address={
    city:"Malappuram",
    pincode:673639
}

// to merege the objects

let personaddress={...person,...address}
console.log("personaddress",personaddress);


// shallow coppy
let personcoppy={...person}
console.log("personcoppy",personcoppy);

