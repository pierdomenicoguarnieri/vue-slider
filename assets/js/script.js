const images = [
  "assets/img/01.webp",
  "assets/img/02.webp",
  "assets/img/03.webp",
  "assets/img/04.webp",
  "assets/img/05.webp"
];

const imgContainer = document.querySelector(".pg-img-container");

const imgContainerPreview = document.querySelector(".pg-img-preview") 

const btnNext = document.querySelector(".next");

const btnPrev = document.querySelector(".prev");

for(let i = 0; i < images.length; i++){
  let image = images[i];
  imgContainer.innerHTML +=`
  <img src="${image}" class="imgCarousel" alt="">
  `
  imgContainerPreview.innerHTML +=`
  <img src="${image}" class="imgPreview" alt="">
  `
}

const imgCollection = document.querySelectorAll(".imgCarousel");

const imgPreviewCollection = document.querySelectorAll(".imgPreview");


imgCollection[0].classList.add("show");

imgPreviewCollection[0].classList.add("active");

let i = 0;

for(let j = 1; j < imgCollection.length; j++){
  imgCollection[j].classList.add("scrolled");
}

btnNext.addEventListener("click", function(){

  if(i == (imgCollection.length) - 1){
    imgCollection[i].classList.remove("show");
    imgPreviewCollection[i].classList.remove("active");
    i = 0;
    imgCollection[i].classList.add("show");
    imgPreviewCollection[i].classList.add("active");
  }else{
    i++;
    imgCollection[i - 1].classList.remove("show");
    imgPreviewCollection[i - 1].classList.remove("active");
    imgCollection[i].classList.add("show");
    imgPreviewCollection[i].classList.add("active");
  }
})

btnPrev.addEventListener("click", function(){
  if(i == 0){
    imgCollection[i].classList.remove("show");
    imgPreviewCollection[i].classList.remove("active");
    i = (imgCollection.length) - 1;
    imgCollection[i].classList.add("show");
    imgPreviewCollection[i].classList.add("active");
  }else{
    i--;
    imgCollection[i + 1].classList.remove("show");
    imgPreviewCollection[i + 1].classList.remove("active");
    imgCollection[i].classList.add("show");
    imgPreviewCollection[i].classList.add("active");
  }
})