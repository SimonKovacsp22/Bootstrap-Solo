const endPoint = "https://striveschool-api.herokuapp.com/api/movies";
let submitBtn = document.querySelector("button[type='submit']");
let editBtn = document.getElementById('edit-btn')
let form = document.querySelector("#add-movies");
const eventId = new URLSearchParams(window.location.search).get("eventId");
const eventCategory = new URLSearchParams(window.location.search).get("category");
const handleSubmit = async (event) => {
  event.preventDefault();

  const newMovie = {
    name: document.getElementById("name").value,
    description: document.getElementById("desc").value,
    category: document.getElementById("category").value,
    imageUrl: document.getElementById("img").value,
  };
  console.log(newMovie);
  await fetch(endPoint, {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTIzNjAwNzksImV4cCI6MTY1MzU2OTY3OX0.SIbjIeox4vcnxGt1Yw2LzN9YuDo75vi8n2oxzXHNDUM",
      "Content-type": "application/json",
    },
  });
};
form.addEventListener("submit", handleSubmit);


window.onload = async function () {
  if (eventId) {
    submitBtn.classList.add("d-none");
    editBtn.classList.remove('d-none');
    editBtn.addEventListener('click',editMovie)
    const url = endPoint + '/' + eventCategory
    const response = await fetch(url,{
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTIzNjAwNzksImV4cCI6MTY1MzU2OTY3OX0.SIbjIeox4vcnxGt1Yw2LzN9YuDo75vi8n2oxzXHNDUM",
          
        },
      })
    const moviesOfCategory = await response.json()
    let movieToDisplay = moviesOfCategory.filter(id => id._id=== eventId)
    console.log(movieToDisplay[0].name)
    
     document.getElementById("name").value = movieToDisplay[0].name
     document.getElementById("desc").value = movieToDisplay[0].description
     document.getElementById("category").value = movieToDisplay[0].category
     document.getElementById("img").value = movieToDisplay[0].imageUrl

     let containerNode = document.querySelector('.container')
     let ulNode = document.createElement('ul')
     ulNode.className='list-group list-group-flush'
     ulNode.innerHTML = `<li class="list-group-item pl-2"><strong>description:</strong> ${movieToDisplay[0].description}</li>
     <li class="list-group-item pl-2"><strong>img URL:</strong> ${movieToDisplay[0].imageUrl}</li>
     <li class="list-group-item pl-2"><img src=${movieToDisplay[0].imageUrl}></li>`
     containerNode.appendChild(ulNode)


    

    
    
  }
};

const editMovie = async function () {
    const newMovie = {
        name: document.getElementById("name").value,
        description: document.getElementById("desc").value,
        category: document.getElementById("category").value,
        imageUrl: document.getElementById("img").value,
      };
    const url = endPoint + `/` + eventId
    const response = await fetch(url,{
        method: "PUT",
        body: JSON.stringify(newMovie),
        headers: {
            
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTIzNjAwNzksImV4cCI6MTY1MzU2OTY3OX0.SIbjIeox4vcnxGt1Yw2LzN9YuDo75vi8n2oxzXHNDUM",
          "Content-type": "application/json"
          
        },
      })
}


