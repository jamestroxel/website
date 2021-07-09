<template>
 <div class="home">
   <div class="home__wrapper">
     <section class="home__media__wrapper">
       <div class="home__media">
         <transition name="fade">
          <img v-if="image" :src="image" class="home__media__image" alt=""/>
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
// import { gsap } from 'gsap'
// import each from 'lodash/each'
export default {
  name: 'Home',
  data() {
    return {
     image:"",
     alt:""
    };
  },
  created() {
    },
  unmounted() {

  },
  mounted() {
    // this.ref = this.$refs.title
    // this.elements = document.querySelectorAll('.home__project__title span')
    // this.titleSpan = document.querySelectorAll(".home__project__title");
    // for (let i = 0; i < this.titleSpan.length; i++){
    //   this.titleSpan[i].innerHTML = this.titleSpan[i].textContent.replace(/\S/g, '<span>$&</span>');
    // // this.title = each(this.titleSpan, (e) => { gsap.timeline({paused:true}).to(this.titleSpan[e].children, { 
    // //     y: '100%',
    // //     stagger: 0.01,
    // //     duration: .2, 
    // //     ease: "back"
    // //   })
    // // })
    // this.titles = document.querySelectorAll('.home__project__title')

    // gsap.utils.toArray(".home__project__title").forEach(title => {
  
    //   this.tl = gsap.timeline({ paused: true });
      
    //   this.tl.to(".home__project__title", { 
    //   opacity: 0,
    //     duration: .5, 
    //     ease: "power4.out"
    //   })

      
    //   title.addEventListener("mouseover", () => this.tl.play() );
    //   title.addEventListener("mouseout", () => this.tl.reverse() );
    // });
    // this.tl = gsap.timeline({paused:true})
    // this.fade = this.tl.to(".home__project__title", { 
    //   opacity: 0,
    //     duration: .5, 
    //     ease: "power4.out"
    //   })
  },
  methods: {
    titleOver(event) {
      console.log(event.path[0].innerHTML)
      if (event.path[0].innerHTML == "A Decade of Loud Music") {
        this.image = require('../assets/bottom.png')
        this.alt = event.path[0].innerHTML
      }
      if (event.path[0].innerHTML == "Karpov vs. Korchnoi") {
        this.image = require('../assets/KvK_VI-05.png')
        this.alt = event.path[0].innerHTML
      }
      if (event.path[0].innerHTML == "Near Earth Objects") {
        this.image = require('../assets/nasa-jpl-neo-1.png')
        this.alt = event.path[0].innerHTML
      }
      console.log(this.image)
      // this.fade.play();
    },
    titleOut() {
      // this.tl.to(this.$refs.title, { 
      // opacity: 1,
      //   stagger: 0.01,
      //   duration: .2, 
      //   ease: "back"
      // }).reverse();
      this.image = ""
      // this.fade.reverse();
    },
    // getUrl(){
    //   return this.image
    // }
  }
}
</script>


