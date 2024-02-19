var subBtn=document.getElementById("submitBtn");
var filmName=document.getElementById("movieName");
var movieContainer=document.getElementById("container")
var MovieStatus=document.getElementById("movieStatus")


//click event is added to submit button
subBtn.addEventListener("click",()=>{
    movieContainer.innerHTML =""
    MovieStatus.innerHTML=""
    MovieStatus.innerHTML="<p><b>Loading.......</b></p>"
    if(filmName.value==""){
        MovieStatus.innerHTML=""
        alert("!!!  Movie Name Reqired: Enter Any Movie Name");
    }
    else{
             // API Link    ======>https://www.omdbapi.com/?apikey=45f0782a&s=titanic
        axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${filmName.value}`).then((res)=>{
        if(res.data.Response=="True"){
            var movies=res.data.Search;
            movies.map((movie,index)=>{
                MovieStatus.innerHTML=""
                movieContainer.innerHTML += `<div class="movieBlog">
                                                <img  src="${movie.Poster}" class="moviePoster"/>
                                                <div class="movieDetails">
                                                    <p><b>Movie Name:${movie.Title}</b></p>
                                                    <p><b>Movie Relese  Year:${movie.Year}</b></p>
                                                </div>
                                            </div>`

            })
        }else{
            MovieStatus.innerHTML="<p><b>!!!  Error 404 Movie  not found</b></p>"
        }
        })
    }
});



/*
<div id="movieBlog">
            <img  src="" class="moviePoster"/>
            <div class="movieDetails">
                <p><b>Movie Name:</b></p>
                <p><b>Movie Relese  Year:</b></p>
            </div>
            </div>
*/