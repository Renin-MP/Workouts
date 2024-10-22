let searchBox=document.getElementById('searchBox')
// voice input
const microphone=document.getElementById("microMic")
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
const recognition=new SpeechRecognition()
recognition.lang='eng-us'

searchBox.addEventListener('input',function(event){
    console.log();
    
    fetchMovies(searchBox.value)
})
let fetchMovies = async (movieName) => {
     const movieURL = `http://www.omdbapi.com/?s=${movieName}&apikey=f056e2f7`
    try {
         document.getElementById("heading").style.display="none"
        let response = await fetch(movieURL)
        let data = await response.json()
        console.log("data", data);
        let moviesList=`<div class=" row">`
        data.Search.forEach((value)=>{
            let movieCard=`<div class="card col-12 col-sm-6 col-md-3 gap-2" >
            <img src=${value.Poster} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${value.Title}</h5>
            // <h5 class="card-year">${value.Year}</h5>
            </div>
          </div>`
         moviesList+=movieCard 
        })
                moviesList+=`</div>`
        console.log("moviesList",moviesList);

        let movieContainer=document.getElementById('movie-container')
        movieContainer.innerHTML=moviesList
    } catch (err) {
        console.log("err", err);
    }
}


// movie listener


microphone.addEventListener('click' ,(event)=>{
    event.preventDefault()
    recognition.start();  // start voice recognition
})

// start our result of voice recognition
recognition.onresult=(event)=>{
    const voiceQuery=event.results[0][0].transcript
    fetchMovies(voiceQuery)
}

recognition.onerror=(event)=>{
    console.log('voice recognition error');
    alert('voice recognition failed,please try again')
}








