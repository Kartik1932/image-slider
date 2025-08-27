const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot")
    if(i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        index = i;
        showImage();
    })

    dotsContainer.appendChild(dot);
})

const dots = document.querySelectorAll(".dot");

function showImage(){
    carouselImages.style.transform = `translateX(${-index * 600}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
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