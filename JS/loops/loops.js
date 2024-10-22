var bikes=["pulser","Ktm","Re","r15"]
// for of
// for empty elements in array=>undefind
// array
for (var bike of bikes){
console.log("bike",bike);

}

// var person={
//     fNme:"Arjun",
//     lName:"KM",
//     age:22,

// }

// uncaught type error : person is not iterable
// for( var value of person ){

//  console.log("value ",value);

//   }




//  for in
//  empty elemenhonets will be ingnored
//   for array and object

 var mobiles=["vivo","oppo","iphone"]

 for ( var index in mobiles){
    console.log(`mobile in index ${index} is ${mobiles[index]}`);



    
 }




 
//  object


var laptop={

    name:"Lenova",
    price:35000,
    ram:"16GB",
    memory:"512GB",
    processor:"core i7"




}


for (var key in laptop){
    console.log(`key is ${key} : value is ${laptop[key]}`);
    
}

var employees = [
    {
        id:1,
        empName:"Raju",
        salary:25000
    },
    {
        id:2,
        empName:"Ajay",
        salary:18000
    },
    {
        id:3,
        empName:"Vijay",
        salary:40000
    },
    {
        id:4,
        empName:"Joe",
        salary:32000
    }
]

// WAP employees > 2000 salary
for(var employee of employees ){
    if(employee.salary>20000){
        console.log("employee : salary>2000 is " ,employee.employees);
        
    }

}
// //  WAP empName >3 char
// for( var employee of employees ){
//     if(employee. empName.length>3){
//         console.log("empName >3 char: ", employee.empName);
        
//     }
// }

for(var index in employees){
    if(employees[index].salary>20000){
    console.log("empName:salary>20000",employees[index.employee]);
    
}
}





//     if(employees.employee.salary>20000){
//    console.log(` salary in index ${index} is ${employees[index]}`);
   

for(var index in employees){
    if(employees[index].empName.length>3){
        console.log("empName >3 chars:",employees[index].empName);
        
    }
}