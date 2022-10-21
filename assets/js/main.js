// Creo array slides
const images = [
{
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
}, 
{
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
}, 
{
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
}, 
{
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
}, 
{
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
}
];

// stampo in console array 
//console.log(images);

let activeImg = 0;

// creo markup
for (let i = 0; i < images.length; i++) {
    const thisImage = images[i];
    


    const imagesMarkup =
    ` <div class="col-10 g-0 ${i === activeImg ? 'active' : ''} " >
        <div class="slides">
            <img class="img-fluid}"src="./assets/${thisImage.image}" alt="">
            <h3>${thisImage.title}</h3>
            <p>${thisImage.text}</p>
        </div>
    </div>
   `

    document.querySelector('.row').insertAdjacentHTML('beforeend', imagesMarkup)
    //console.log(imagesMarkup);
}


// // seleziono elemento della DOM dove inserire i pulsanti
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');



// aggiungo funzione click su pulsante prev
prevButton.addEventListener('click', function(){
    
    // seleziono tutte le immagini e trovo quella attiva
    const allSlides = document.querySelectorAll('.col-10');
    
    const activeSlide = allSlides[activeImg];
    //  devo togliere la classe active all'immagine corrente
    activeSlide.classList.remove('active');
    
    // decremento le immagini di 1
    if(activeImg == images.length-5){
        activeImg = 5
    }
    activeImg--;
    
    //seleziono la seconda immagine
    const nextImg = allSlides[activeImg];
    
    // aggiungo la classe active all'immagine
    nextImg.classList.add('active');
    
})

// aggiungo funzione click su pulsante next
nextButton.addEventListener('click', function() {
    
    // seleziono tutte le immagini e trovo quella attiva
    const allSlides = document.querySelectorAll('.col-10');
    console.log(allSlides);
    
    const activeSlide = allSlides[activeImg];
    console.log(activeSlide);
    //  devo togliere la classe active all'immagine corrente
   
    activeSlide.classList.remove('active');

    // scorro le immagini di 1
     if(activeImg == images.length-1){
        activeImg = 0
    }
    activeImg++;
    
    //seleziono la seconda immagine
    const nextImg = allSlides[activeImg];
        
   
    // aggiungo la classe active all'immagine
    nextImg.classList.add('active');

})
