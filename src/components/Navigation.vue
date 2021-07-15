<template>
  <nav class="navigation">
    <!-- <div class="monogram__wrapper">
      <img class="monogram" :src="monogram"/>
    </div> -->
    <!-- <div class="monogram__wrapper">
      <transition  name="fadeIn">
        <img v-if="loaded == true" class="monogram" :src="monogram"/>
      </transition>
    </div> -->
    <ul class="navigation__list">
      <li class="navigation__list__item">
        <div class="navigation__spinner__wrapper">
          <p class="navigation__spinner"></p>
        
          <transition  name="fadeIn">
            <router-link to="/" class="navigation__list__link">James Troxel</router-link> 
          </transition>
        </div>
      </li>
      <li class="navigation__list__item">
        <router-link to="/about" class="navigation__list__link"
          >About</router-link
        >
      </li>
      <li class="navigation__list__item">
        <router-link to="/" class="navigation__list__link"
          >Home / {{ $route.name }}
        </router-link>
      </li>
      <!-- <li class="navigation__list__item">
        <div class="navigation__list__link">&bull;</div>
      </li> -->
       <li class="navigation__list__item">
      <transition  name="fadeIn">
         <img class="monogram" src="../assets/JT_Mark-01.svg"/>
        <!-- <img v-if="loaded == true" class="monogram" :src="monogram"/> -->
      </transition>
    </li>
    </ul>
  </nav>
</template>
<script>
import GT from "../assets/monogram_GT-01.svg"
// import JWT from  "../assets/monogram_JWT-01.svg"
import Broken from  "../assets/monogram_BrokenType-01.svg"
import MIT from  "../assets/monogram_MIT-01.svg"
import Tongue from  "../assets/monogram_tongue-01.svg"
import HP from  "../assets/monogram_HP-01.svg"

export default {
  name: "Navigation",
  data() {
    return {
      loaded: false,
      monogram: [],
      monograms: [GT, MIT, Broken, Tongue, HP]
    };
  },
  watch:{
    $route (){
        this.changeMonogram();
        this.loaded = true
    }
  },
  updated() {},
  computed: {},
  created() {},
  mounted() {
    window.onload = [this.displayClock(), this.changeMonogram()];

  },
  methods: {
    changeMonogram() {
      this.monogram = this.monograms[Math.floor(Math.random() * this.monograms.length)];
     this.loaded = !this.loaded;
    },
    displayClock() {
      // const display = new Date().toLocaleTimeString();
      const clock = document.querySelector(".navigation__spinner");
      clock.innerHTML = "FULL &bull; STACK &bull; DESIGNER &bull;";
      this.spinner = document.querySelector(".navigation__spinner");
      this.spinner.innerHTML = this.spinner.textContent.replace(
        /\S/g,
        "<span>$&</span>"
      );
      this.element = document.querySelectorAll(".navigation__spinner span");
      for (let i = 0; i < this.element.length; i++) {
        this.element[i].style.transform =
          "rotate(" + i * (360 / this.element.length) + "deg)";
      }
      setTimeout(this.displayClock, 1000);
    },
  },
};
</script>
