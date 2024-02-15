
// Variables
const API_URL = 'https://api.unsplash.com/photos/?client_id=zm65fG3jRhwoa7-G_Lw6p3mzcrTP7pjt7LNpQWk7KCM';

let anchorSelector = document.querySelector('a')
let search = document.querySelector('input')
const searchQuery = document.querySelector('input').value;
const TempUrl = `&query=${searchQuery}`;
const container = document.querySelector('.masonry-container');
let currentPage = 1;

// Rest of Code

window.onload = (event) => {
  
  getImages()
  
}

const checkButtons = () => {
  if(currentPage === 1)
  document.getElementById("btn1").style.display = 'none';
  
}
const  getImages = async () => {
  
  
 await function empty(){
  container.innerHTML = ''
 };

   fetch(API_URL+`&per-page=30&page=${currentPage}`+TempUrl)
  .then(function (response){
    return response.json()})
  .then(data => {
    console.log(data);
    data.forEach((d) => {
     const img = document.createElement('img')
     const anchor = document.createElement('a')
     const item = document.createElement('div')
     img.innerHTML = `Likes = ${d.likes}`;
     img.setAttribute('src', d.urls.regular)
     item.innerHTML = `<span><a href="${d.user.links.html}" target="_blank">${d.user.username}</a></span>`
     anchor.href = d.links.html;
     anchor.target = '_blank'
     anchor.appendChild(img)
     item.classList.add('masonry-item')
     item.appendChild(anchor)
     container.appendChild(item)
  })
     
  })
}


const prev = () => {
  checkButtons();
  currentPage = Math.max(1, currentPage - 1)
  getImages(currentPage)
};

const next = () => {
  
  currentPage++;
  
  getImages(currentPage)

};





  




