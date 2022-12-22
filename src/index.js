// write your code here
const ramenAPI = 'http://localhost:3000/ramens';
const ramenMenu = document.getElementById('ramen-menu');
const ramenDetail = document.getElementById('ramen-detail');
const ratingDisplay = document.getElementById('rating-display');
const commentDisplay = document.getElementById('comment-display');
const newRamenForm = document.getElementById('new-ramen');

fetch(ramenAPI)
    .then(resp => resp.json())
    .then(displayRamenImages)
    .catch(console.err);

newRamenForm.addEventListener('submit', addNewRamen);

function displayRamenImages(ramenArray) {
    ramenArray.forEach(addRamenToPage)  
}

function addRamenToPage(ramen) {
    const ramenImage = document.createElement('img');
    ramenImage.src = ramen.image;

    ramenImage.addEventListener('click', () => {
        displayRamenDetails(ramen)
    })

    ramenMenu.append(ramenImage);
}

function displayRamenDetails(details) {
   const detailImage = document.querySelector('.detail-image')
   detailImage.src = details.image;
   detailImage.alt = details.name;

   document.querySelector('.name').textContent = details.name;
   document.querySelector('.restaurant').textContent = details.restaurant;

   ratingDisplay.textContent = details.rating;
   commentDisplay.textContent = details.comment;
}

function addNewRamen(e) {
    e.preventDefault();

    const newRamen = {
        name: e.target.name.value,
        rating: e.target.rating.value,
        image: e.target.image.value,
        restaurant: e.target.restaurant.value,
        comment: e.target['new-comment'].value,
    }
    addRamenToPage(newRamen)
    newRamenForm.reset();
}