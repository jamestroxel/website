<template>
 <div class="home">
   <div class="home__wrapper">
     <section class="home__media__wrapper">
       <div class="home__media">
         <transition  name="fadeIn">
           <img v-if="loaded" :src="imgUrl" class="home__media__image" alt=""/>
          <!-- <img v-if="image" :src="image" class="home__media__image" alt=""/> -->
         </transition>
       </div>
     </section>
    
      <section class="home__project">
          <router-link @mouseover="titleOver($event)" @mouseout="titleOut" ref="title" to="/decade-of-loud-music" class="home__project__title">A Decade of Loud Music</router-link><br>
          <router-link @mouseover="titleOver($event)" @mouseout="titleOut" ref="title" to="/karpov-korchnoi" class="home__project__title">Karpov vs. Korchnoi</router-link><br>
          <router-link @mouseover="titleOver($event)" @mouseout="titleOut" ref="title" to="/near-earth-objects" class="home__project__title">Near Earth Objects</router-link>
      </section>

   </div>
 </div>
</template>

<script>
import decade from '../assets/bottom.png'
import kvk from '../assets/KvK_VI-05.png'
import asteroids from '../assets/nasa-jpl-neo-1.png'

export default {
  name: 'Home',
  data() {
    return {
     image:"",
     alt:"",
     showImg: true,
     imgUrl: "",
     loaded: false,
     images: [decade, kvk, asteroids], 
    };
  },
  created() {
    },
  unmounted() {

  },
  mounted() {
    this.img = new Image();
    this.img.onload = () => {
      console.log('img loaded');
      console.log( this.imgUrl);
      this.imgUrl = this.img.src;
      this.showImg = true
      this.img.src = "";
    }
  },
  methods: {
    titleOver(event) {
      console.log(this.img.src)
      if (event.path[0].innerHTML == "A Decade of Loud Music") {
        this.img.src = this.images[0]
        this.alt = event.path[0].innerHTML
      }
      if (event.path[0].innerHTML == "Karpov vs. Korchnoi") {
        this.img.src = this.images[1]
        this.alt = event.path[0].innerHTML
      }
      if (event.path[0].innerHTML == "Near Earth Objects") {
         this.img.src = this.images[2]
        this.alt = event.path[0].innerHTML
      }

      
      this.loaded = true;
    },
    titleOut() {
   
      this.image = ""
      this.loaded = false;
    }
  
  }
}
</script>


