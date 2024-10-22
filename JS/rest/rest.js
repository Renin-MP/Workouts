// rest op

function add(...nums){
    let sum=0
    for (let i=0;i<=nums.length-1;i++){
        sum += nums[i]          //sum = sum + nums[i]
    }
    console.log("sum",sum);
    
}

add(10,98,43,54,43,32)


// default parameter
function greet(Name="Gogo"){
    console.log("Hello",Name);
    
}greet()