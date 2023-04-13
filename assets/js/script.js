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
      interval: null,
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

    showImg(index){
      console.log(index)
      this.counter = index
    },
    
    autoScroll(){
      this.interval = setInterval(() => {
        this.changeImg(true)
      }, 3000);
    },

    mouseOver(){
      clearInterval(this.interval)
    },

    mouseLeave(){
      this.autoScroll()
    }
  },

  mounted(){
    this.autoScroll()
  }
}).mount("#app")