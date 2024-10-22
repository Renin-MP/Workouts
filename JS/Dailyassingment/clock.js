let hours = document.getElementById("#hur");
let minutes = document.getElementById("#min");
let seconds = document.getElementById("#sec");

setInterval(()=>{
    const currentTime = new Date();
    console.log("currentTime", currentTime);
    hur.innerHTML =
    (currentTime.getHours() < 10 ? "0" : " ") + currentTime.getHours();
    min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : " ") + currentTime.getMinutes();
    sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : " ") + currentTime.getSeconds();
      
}, 1000);