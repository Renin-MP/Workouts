// 1. Name function

// function addNums(n1,n2){
//     return n1+n2
// }

// console.log("sum is ",addNums (5,7));



// 2.anonymous functions

// var subtract=function(n1,n2){
//  console.log("defrence is:",n1-n2);
 

// }
// subtract(70,50);


// 3.IIEF (Immediate invoked \function expression)
// or self invoked function


// (function(n1,n2){
//     console.log("divide:"(n1/n2));
    
// })(30,2)



// Arrow function
// single line of code
// resturn is added by js engine


// var multiply=(n1,n2)=>n1*n2
// console.log("product:",multiply(20,2));



// // in case of single parameter
// // paranthesis in optional

// var sqrNum=n1=>n1*n2
// console.log("sqrNum",sqrNum(4));


// // in case no parameter=>paranthesis is required

// var greet=()=>{
//     console.log("Hello Goodafternoon");
    

// }
// greet()



// nested function

// function sqrNums(n1) {
//     console.log("sqrNums executed");
//     return function(){
//         console.log("sqr of num is:",n1*n1);
//         return function(name){
//             console.log("hello",name);
            
//         }
        
//     }
    
// }

// sqrNums(10)()("Raju")





// call back function

function test(callback){
    console.log("text executed");
    console.log("Logic performed");
    var output=2024
    console.log("text function out put",output);
    callback(output)
    
    
}
function sample(output){
    console.log("sample function executed",output);
    

}

test (sample)




// example

function userInput(callback){
    var userName=prompt("Please enter your name")
    console.log("userName",userName);
    callback(userName)
}


function msgUser(userName){
    alert(`Hello ${userName} welcome to your app`)
}
userInput(msgUser)
