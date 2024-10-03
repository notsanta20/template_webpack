const back = document.querySelector(`.back`);
const forward = document.querySelector(`.forward`);
const images = document.querySelectorAll(`li img`);
let index = 0;


function initialize(){
    images[index].classList.add(`visible`);
    setInterval(autoChange, 5000);
}

function nextSlide(){
    if(index < images.length-1){
        index++;
        images.forEach((img)=>{
            img.classList.remove(`visible`);
        })
        images[index].classList.toggle(`visible`);
    }
}

function preSlide(){
    if(index > 0){
        index--;
        images.forEach((img)=>{
            img.classList.remove(`visible`);
        })
        images[index].classList.toggle(`visible`);
    }
}

function autoChange(){
    if(index === images.length-1){
        index = -1;
    }
    nextSlide();
}

back.addEventListener(`click`, ()=>{
    preSlide();
})

forward.addEventListener(`click`, ()=>{
    nextSlide();
})

initialize();