const url="https://striveschool-api.herokuapp.com/api/movies";

     const  getMovies = async (url,method) => {
        try {
            let response = await fetch(url,
            {
                method: method ,
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
     const displayMovies = async function() {
        let moviesUL = document.querySelector('#movies-ul')
        const comedyCategories = await getMovies(url)
        comedyCategories.forEach(async (cat) => {
            const catMovies = await getMovies(url+ '/' + cat)
            catMovies.forEach(movie => {
                let movieliNode = document.createElement('li') 
                movieliNode.className= "list-group-item pl-2 d-flex"
                movieliNode.innerHTML= `${movie.name} <button type="button" class="btn btn-danger " >Delete</button>`
                movieliNode.querySelector('.btn-danger').addEventListener('click',async ()=>{
                    getMovies(url+`/`+movie._id,"DELETE")
                    movieliNode.remove()
                })
                moviesUL.appendChild(movieliNode)
            })
        })
        // comedyCategory.forEach(movie => {
        //     let movieUl = document.createElement('ul')
        //     movieUl.className = 'list-group list-group-flush'
        //     movieUl.innerHTML = `<img class="img-fluid  w-100"src="${movie.imageUrl}">`
        //     movieUl.addEventListener('click',()=>{
        //         window.location.assign(`./backoffice.html?eventId=` + movie._id +'&category='+ movie.category)
        //     })
        //     moviesContainer.appendChild(movieUl)
        // })
    
       
    
    }

    window.onload = function () {
    
            displayMovies()
        }