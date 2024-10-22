let greetElement=document.getElementById("greet")
console.log("greetElement",greetElement);
// add style
greetElement.style.color="red"
greetElement.style.backgroundColor="yellow"
// greetElement.innerText="Hello James Bond"
// greetElement.innerHTML='<button>Hello James Bond</button>'

// let transportElements=document.getElementsByClassName('transport')
// console.log("transportElements",transportElements);
// transportElements[0].innerText="Super car"
// transportElements[1].innerText="Good bike"

// let allPtagElements=document.getElementsByTagName('p')
// console.log("allPtagElements",allPtagElements);

// let onePTagElement=document.querySelector('p')
// console.log("onePTagElement",onePTagElement);

// let allPtagElements=document.querySelectorAll("p")
// console.log("allPtagElements",allPtagElements);

let createH6Element=document.createElement("h6")
createH6Element.innerText="I M NEW H6"
// document.write(createH6Element.innerText="I M NEW H6")
// OR
let myContainerElement=document.getElementById('mycontainer')
myContainerElement.appendChild(createH6Element)
console.log("myContainerElement",myContainerElement);

let randomTextElement=document.getElementById('randomText')
console.log("randomTextElement",randomTextElement);
// randomTextElement.className='randomStyle1 randomStyle2'
// randomTextElement.classList.add('randomStyle1','randomStyle2')
// randomTextElement.classList.remove('randomStyle1')

// exercise

function funExercise(){
    randomTextElement.classList.add('randomStyle1')
    setTimeout(()=>{
        randomTextElement.classList.add('randomStyle2')
    },2000)

    setTimeout(()=>{
        randomTextElement.classList.remove('randomStyle2')
        randomTextElement.classList.add('randomStyle3')
    },4000)
}

funExercise()

// setInterval(()=>{
//     funExercise()
// },8000)

let allH2Elements=document.querySelectorAll('h2')
console.log("allH2Elements",allH2Elements);

for(let i=0;i<=allH2Elements.length-1;i++){
    if((i+1)%2==0){
        allH2Elements[i].style.color="red"
    }else{
        allH2Elements[i].style.color="blue"
    }
}