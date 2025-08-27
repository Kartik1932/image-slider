const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showImage(){
    carouselImages.style.transform = `translateX(${-index * 600}px)`;
}

nextBtn.addEventListener("click", () => {
    index++;
    if(index >= images.length){
        index = 0;
    }
    showImage();
})

prevBtn.addEventListener("click", () => {
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    showImage();
})