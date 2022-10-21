// Creo array slides

const slides = [
'./assets/img/01.webp',
'./assets/img/02.webp',
'./assets/img/03.webp',
'./assets/img/04.webp',
'./assets/img/05.webp'
]
// stampo in console array 
console.log(slides);


// seleziono elemento della DOM dove inserire le immagini
const slidesElement = document.querySelector('.slides');

// scorro le immagini nell'array e le inserisco dinamicamente nell'elemento della DOM
for (let i = 0; i < slides.length; i++) {
    const slideImg = slides[i];
    const slideToCreate = `<img class="${i === 0 ? 'active' : ''}" src="${slideImg}" alt="">`;
    slidesElement.insertAdjacentHTML('beforeend', slideToCreate);
    console.log(slideToCreate);
}


// seleziono elemento della DOM dove inserire i pulsanti
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let activeImg = 0;

// aggiungo funzione click su pulsante next
nextButton.addEventListener('click', function() {
    // seleziono tutte le immagini e trovo quella attiva
    const allSlides = document.querySelectorAll('.slides > img');

    const activeSlide = allSlides[activeImg];
    //  devo togliere la classe active all'immagine corrente
    activeSlide.classList.remove('active');

    // scorro le immagini di 1
    activeImg++;

    //seleziono la seconda immagine
    const nextImg = allSlides[activeImg];

    // aggiungo la classe active all'immagine
    nextImg.classList.add('active');
   
    
      
         
          
})

// aggiungo funzione click su pulsante prev
prevButton.addEventListener('click', function(){

    // seleziono tutte le immagini e trovo quella attiva
    const allSlides = document.querySelectorAll('.slides > img');

    const activeSlide = allSlides[activeImg];
    //  devo togliere la classe active all'immagine corrente
    activeSlide.classList.remove('active');

    // decremento le immagini di 1
    activeImg--;

    //seleziono la seconda immagine
    const nextImg = allSlides[activeImg];

    // aggiungo la classe active all'immagine
    nextImg.classList.add('active');


})

