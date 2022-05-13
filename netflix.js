const url = "https://striveschool-api.herokuapp.com/api/movies"
const  getMovies = async (url) => {
    try {
        let response = await fetch(url,
        {
            method: "GET" ,
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTIzNjAwNzksImV4cCI6MTY1MzU2OTY3OX0.SIbjIeox4vcnxGt1Yw2LzN9YuDo75vi8n2oxzXHNDUM",
                "Content-type": "application/json",
            }
            
        }
    )
    movies = await response.json()
    console.log(movies)
    return movies
    }
    catch(error){
        console.log(error)
    }
    
}
window.onload = () => {
    
    getMovies(url)
    displayMoviesComedy()
    displayMoviesClassic()
    displayMoviesDoc()
    getMovies("https://striveschool-api.herokuapp.com/api/movies/627e2255c2fac30015d5ee3d")

    
}

const displayMoviesComedy = async function() {
    let moviesContainer = document.querySelectorAll('.shows-container')[0]
    const comedyCategory = await getMovies(url + '/Comedy')
    comedyCategory.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.className = 'col-6 col-md-4 col-lg-2 n-show'
        movieDiv.innerHTML = `<img class="img-fluid  w-100"src="${movie.imageUrl}">`
        movieDiv.addEventListener('click',()=>{
            window.location.assign(`./backoffice.html?eventId=` + movie._id +'&category='+ movie.category)
        })
        moviesContainer.appendChild(movieDiv)
    })

   

}

const displayMoviesClassic = async function() {
    let moviesContainer = document.querySelectorAll('.shows-container')[1]
    const comedyCategory = await getMovies(url + '/Classic')
    comedyCategory.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.className = 'col-6 col-md-4 col-lg-2 n-show'
        movieDiv.innerHTML = `<img class="img-fluid  w-100"src="${movie.imageUrl}">`
        movieDiv.addEventListener('click',()=>{
            window.location.assign(`./backoffice.html?eventId=` + movie._id +'&category='+ movie.category)
        })
        moviesContainer.appendChild(movieDiv)
    })

   

}

const displayMoviesDoc = async function() {
    let moviesContainer = document.querySelectorAll('.shows-container')[2]
    const comedyCategory = await getMovies(url + '/Documentary')
    comedyCategory.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.className = 'col-6 col-md-4 col-lg-2 n-show'
        movieDiv.innerHTML = `<img class="img-fluid  w-100"src="${movie.imageUrl}">`
        movieDiv.addEventListener('click',()=>{
            window.location.assign(`./backoffice.html?eventId=` + movie._id +'&category='+ movie.category)
        })
        moviesContainer.appendChild(movieDiv)
    })

   

}