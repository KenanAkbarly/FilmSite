const url = "https://api.tvmaze.com/shows";
let movies = document.querySelector("body")
 let main = document.querySelector('.container')
let row = document.querySelector(".row")
fetch(url).then((response)=>response.json()).then((data) =>{
    for(let i=0; i<data.length; i++) {
    const movieImage = data[i].image.medium;
    const movieName = data[i].name;
    const moviePremiered = data[i].premiered;
    const movierating = data[i].rating.average;
    const movieLanguage = data[i].language;
    const movieGenre = data[i].genres;
    const officialWebSite = data[i].officialSite;
    
    let card = document.createElement('div');
    card.classList.add('main',"col-4");
    card.innerHTML =`
    <div id="main" class="container mt-3">
        <div class="card  " style="width: 18rem;">
        <img src="${movieImage}" class="card-img-top" alt="...">
        <div class="ul-li">
        <h5 class="card-title">${movieName}</h5>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Premiere: ${moviePremiered}</li>
        </ul>
        </div>
        </div>
        <div class="ul-li">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">imdb raiting: ${movierating}</li>
        <li class="list-group-item">Genre: ${movieGenre}</li>
        <li class="list-group-item">Language: ${movieLanguage}</li>
        </ul>
        </div>
        <div class="card-body">
        <a href="${officialWebSite}" class="btn btn-primary  ">Go to official websit</a>
        
        </div>
    </div>
    </div>
    
    `
       
        row.appendChild(card);
        main.appendChild(row);
        movies.appendChild(main);
    }
})