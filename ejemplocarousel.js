const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
burger.addEventListener('click',() => {
        //Toggle Nav
    nav.classList.toggle('nav-active');
    
    //Animate Links
    //osea va a ser la animacion para cada uno de los links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;  
        }
    });
});
}


//CAROUSEL


const carouselSlide =  document.querySelector('.carousel-slide');
const carouselImages =  document.querySelectorAll('.carousel-slide img');


//buttons
const prevBtn =  document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");


//Counte
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button Liteners

nextBtn.addEventListener('click', () => {
  
if(counter >= carouselImages.length -1)return;

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0)return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length -2;
      carouselSlide.style.transition = "transform 0.6s ease-in-out";

  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
      carouselSlide.style.transition = "transform 0.6s ease-in-out";

  }

});



const menu = () => {
    navSlide();

}
menu();

