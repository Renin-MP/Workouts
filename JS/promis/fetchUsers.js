const URL ='https://jsonplaceholder.typicode.com/users'
fetch(URL)
.then(response=> response.json())
.then(data => console.log("data",data))
.catch((err)=>{
    console.log("err",err);
    
})
.finally (() => {
    console.log("Fainally executed");
    
})

let fetchUsers = async ()=>{
    try{
        let response = await fetch(URL)
        let data = await response.json()
        console.log("data",data);

        let  usersList=`<ul>`
       data.forEach((value)=>{
        let list=`<li>${value.name}</li>`
        usersList+=list
       })
        usersList+=`</ul> `
        console.log("usersList",usersList);
        let usersContainerElement=document.getElementById(`userscontainer`)
        usersContainerElement.innerHTML=usersList

    } catch (err){
        console.log("err",err);
        
    }
    finally{
        console.log("Fainally executed");
        
    }
}
 fetchUsers()