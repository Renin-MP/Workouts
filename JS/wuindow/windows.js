navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    console.log("longitude",longitude);
    console.log("latitude",latitude);
    
})

console.log("this",this);


var name ="Raju"
var age = 18
console.log(" name ", name );
console.log(" age",window.age);

function someFunc(){
    console.log("someFunc executed");
    
}
window.someFunc()


//  alert doesn't returns anythings => undefined
// let alertUser=>alert ("This is to alert you")
// console.log("alertUser",alertUser);//undefined

// confirm return boolean 
let confirmAge = confirm("Are u 18+ ?")
console.log("confirmAge",confirmAge);
console.log(confirmAge?"Eligible to vote" :" not Eligible to vote");


let userAge= prompt("Pleace enter ur age ")
console.log("userAge",typeof parseInt(userAge));


if (userAge){
    if(parseInt(userAge)>18){
        window.open(`https://www.flipkart.com/`)
    }else{
        window.open(`https://www.firstcry.com/`)
    }
}


console.log("history",history);
console.log("location",location);
console.log("navigator",navigator);
console.log("screen",screen);









