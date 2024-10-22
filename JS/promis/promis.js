let promisExample = new Promise((resolve,reject)=>{
    if (20>10){
        resolve("20 is greater than 10")
    }else{
        reject("20 is not greater than 10")
    }
}) 
.then((resolve)=>{
    console.log("resolve",resolve);
    
}).catch((reject)=>{
    console.log('reject',reject);
    
})

