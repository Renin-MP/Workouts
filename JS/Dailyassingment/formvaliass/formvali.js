


// let searchBox=document.getElementById('searchBox')
// searchBox.addEventListener('input',function(event){
//     console.log();
//     fetchMovies(searchBox.value)
// })

// let fetchMovies = async (movieName) => {
//     const movieURL = `http://www.omdbapi.com/?s=${movieName}&apikey=f056e2f7`
//     try {
//         let response = await fetch(movieURL)
//         let data = await response.json()
//         console.log("data", data);
//         let moviesList=`<div class=" row">`
//         data.Search.forEach((value)=>{
//             let movieCard=`<div class="card col-12 col-sm-6 col-md-3 gap-2" >
//             <img src=${value.Poster} class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${value.Title}</h5>
//             </div>
//           </div>`
//          moviesList+=movieCard
//         })
//         moviesList+=`</div>`
//         console.log("moviesList",moviesList);

//         let movieContainer=document.getElementById('movie-container')
//         movieContainer.innerHTML=moviesList
        

//     } catch (err) {
//         console.log("err", err);
//     }
// }
  

  let searchBox=document.getElementById("search")


  searchBox.addEventListener('input',function(event){
   console.log();
   fetchMovies = async (
    
   )
   })