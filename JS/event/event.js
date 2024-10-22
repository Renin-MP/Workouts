let unameElt= document.getElementById(`uname`)
console.log(" unameElt", unameElt);


function hiddenName(){
    console.log("hidenName executed");
    // unameElt.style.visibility="hidden"
    unameElt.style.display="none"
}


function ShowName(){
    // unameElt.style.visibility="visible"
    unameElt.style.display="block"
}


function showHideName(){
    if(unameElt.style.visibility=="hidden"){
        unameElt.style.visibility="visible"
    }else{
        unameElt.style.visibility="hidden"
    }
}

let clickoBtn=document.getElementById(`clicko`)
console.log("clickoBtn",clickoBtn);


clickoBtn.addEventListener(`click`,function(event){
    event.preventDefault()
    // console.log("event",event);
    console.log("clicko btn is clicked",);
    
    
})

clickoBtn.addEventListener(`mouseover`,function(){
    console.log("clicko btn mouseover");
    
})