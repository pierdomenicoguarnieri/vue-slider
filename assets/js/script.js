const{createApp} = Vue;

createApp({
  data(){
    return{
      images: [
        "assets/img/01.webp",
        "assets/img/02.webp",
        "assets/img/03.webp",
        "assets/img/04.webp",
        "assets/img/05.webp",
      ],
      active: "active",
      counter: 0,
      imgContainer: document.querySelector(".pg-img-container"),
      imgContainerPreview: document.querySelector(".pg-img-preview"),
    }
  },    
  
  methods: {
    changeImg(flag){
      if(flag){
        (this.counter == (this.images.length) - 1) ? this.counter = 0 : this.counter++;
      }else{
        (this.counter == 0) ? this.counter = (this.images.length) - 1 : this.counter--;
      }
    },

    prevImg(){
      if(this.counter == 0){
        this.images[this.counter].flag = false;
        this.counter = (this.images.length) - 1;
        this.images[this.counter].flag = true;
      }else{
        this.counter--;
        this.images[this.counter].flag = true;
        this.images[this.counter + 1].flag = false;
      }
    }
  }
}).mount("#app")

// for(let i = 0; i < images.length; i++){
//   let image = images[i];
//   imgContainer.innerHTML +=`
//   <img src="${image}" class="imgCarousel" alt="">
//   `
//   imgContainerPreview.innerHTML +=`
//   <img src="${image}" class="imgPreview" alt="">
//   `
// }

// const imgCollection = document.querySelectorAll(".imgCarousel");

// const imgPreviewCollection = document.querySelectorAll(".imgPreview");


// imgCollection[0].classList.add("show");

// imgPreviewCollection[0].classList.add("active");

// let i = 0;

// for(let j = 1; j < imgCollection.length; j++){
//   imgCollection[j].classList.add("scrolled");
// }

// btnNext.addEventListener("click", function(){

//   if(i == (imgCollection.length) - 1){
//     imgCollection[i].classList.remove("show");
//     imgPreviewCollection[i].classList.remove("active");
//     i = 0;
//     imgCollection[i].classList.add("show");
//     imgPreviewCollection[i].classList.add("active");
//   }else{
//     i++;
//     imgCollection[i - 1].classList.remove("show");
//     imgPreviewCollection[i - 1].classList.remove("active");
//     imgCollection[i].classList.add("show");
//     imgPreviewCollection[i].classList.add("active");
//   }
// })

// btnPrev.addEventListener("click", function(){
//   if(i == 0){
//     imgCollection[i].classList.remove("show");
//     imgPreviewCollection[i].classList.remove("active");
//     i = (imgCollection.length) - 1;
//     imgCollection[i].classList.add("show");
//     imgPreviewCollection[i].classList.add("active");
//   }else{
//     i--;
//     imgCollection[i + 1].classList.remove("show");
//     imgPreviewCollection[i + 1].classList.remove("active");
//     imgCollection[i].classList.add("show");
//     imgPreviewCollection[i].classList.add("active");
//   }
// })