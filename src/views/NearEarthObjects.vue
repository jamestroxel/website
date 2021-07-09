<template>
  <div class="project">
    <div class="project__wrapper">
      <div class="project__title__wrapper">
        <h1 class="nearEarth__project__title">
          Near Earth Objects
        </h1>
          <p class="project__feature__text__title">Tools <span class="project__feature__tool">D3</span></p>
        <div class='project__launch__wrapper'>
        <a
          class="project__launch__back"
          >Launch Project</a
        >
        <a
        @mouseover="buttonOver"
        @mouseout="buttonOut"
        @mousedown="buttonDown"
        @mouseup="buttonUp"
          id="button"
          class="project__launch__front"
          href="https://jamestroxel.github.io/NASA-JPL-NEO/"
          target="_blank"
          >Launch Project</a
        >
        </div>
      </div>
      <section class="project__details">
        <div class="project__title__view__wrapper">
          <p class="project__title__view__label"> Scroll down to read more <span class="arrow">&darr;</span></p>
          <p class="project__title__view">
          This website continuously gathers data from Sentry, NASA Jet
          Propulsion Lab's automated, near-earth object monitoring system, and
          displays important statistics about all asteroids currently under its
          observation.
          </p>
        </div>
        <figure id="teaserTrigger" class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img
            class="project__hero__image"
            src="../assets/nasa-jpl-neo-1.png"
          />
        </figure>
           <p class="project__footnote">Initial view</p>
        <p class="project__text">
          The project is intended to improve the user experiense of Jet Propuslion Lab's current <a class="link" href="https://ssd.jpl.nasa.gov/sbdb.cgi" target="_blank">Small-Body Database Browser</a>. This is achieved by replacing the very information-heavy, tabular format and seperate orbit browser with a more emersive, small-multiple experience, distilling the information down to the what I perceived to be the most important variables, which are outlined below. 
        </p>
         <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img
            class="project__hero__image"
            src="../assets/Sentry_Earth_Impact_Monitoring.png"
          />
        </figure>
          <p class="project__footnote">Current state of NASA Sentry data</p>
          <p class="project__heading">Impact Probability</p>
          <p class="project__text">
            This is represented by the degree of blur given to the black, circular
            "silhouette" of the asteroid in the background of each item. The sharper
            the silhouette, the higher the impact probability.
          </p>
        <p class="project__text">
          This was created using D3 to dynamically generate a unique svg element for each item using the the Impact
          Probability values from the Sentry API. This value is shown on a
          logarithmic scale between the smallest value and 1.
        </p>
        <p class="project__heading">Palermo Hazard Rating</p>
        <p class="project__text">
          This is based on the tabulated impact date, impact probability, and
          impact energy. NASA essentially grades the danger of each NEO on a
          curve. The solid, virtical line indicates where on the curve each
          hazard score lands.
        </p>
        <p class="project__text">
          Variables like diameter are less important when evaluating overall
          risk. Describing an asteroid as "the size of Texas" may sound
          impressive but mean very little if its impact probability is close to
          zero.
        </p>
        <div class="project__hero__wrapper">
          <figure class="project__hero">
            <div class="project__hero__ui__mobile"></div>
            <img
              class="project__hero__image__mobile"
              src="../assets/IMG_3217.png"
            />
          </figure>
          <figure class="project__hero">
            <div class="project__hero__ui__mobile"></div>
            <img
              class="project__hero__image__mobile"
              src="../assets/IMG_3219.png"
            />
          </figure>
        </div>
            <p class="project__footnote">Mobile view of UI with dashboard menu</p>
        <p class="project__text">
          The mobile version tucks away the UI at the bottom of the screen as a scrollable menu that expands upward when tapped. More statistics about each asteroid are revealed by pressing the screen in the area of the item.
        </p>
      </section>
    </div>
  </div>
</template>

<script>

import { gsap, Back } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "NearEarthObjects",
  data() {
    return {
    
    };
  },

  mounted: function () {
    this.titleView  = gsap.timeline({
      scrollTrigger: {
        trigger: '#teaserTrigger',
        start: "top 100%",
        toggleAction: "play restart none none" ,
        markers: false,
        scrub: 1
        }
    });
    this.titleFade = this.titleView.to('.project__title__view__wrapper', { 
        opacity: 0, 
        // delay: .35,
        duration: .3, 
        ease: 'expo.out' 
    });
       this.arrow = gsap.timeline().to(".arrow", 0.5, {
        y: 5,
        repeat: -1,
        ease: Back.easeOut,
        yoyoEase: Back.easeOut,
    });
  },
 
  methods: {
    buttonOver() {
      const tl = gsap.timeline()
      tl.to('.project__launch__front', { 
          top: "-.25rem", 
          left:"-.3rem",
          duration: .3, 
          ease: Back.easeOut.config(4)
      })
        .to('.project__launch__back', {
          background: 'black'
        }, '<-=0.35')
    },
    buttonOut() {
      const tl = gsap.timeline()
      tl.to('.project__launch__front', { 
          top: 0, 
          left:0,
          duration: .3, 
          ease: Back.easeOut.config(4) 
      })
        .to('.project__launch__back', {
            background: 'white'
          }, '<-=0.3')
    },
    buttonDown() {
      const tl = gsap.timeline()
      tl.to('.project__launch__front', { 
          top: '.45rem', 
          left:'.5rem',
          duration: .3, 
          ease: 'expo.out' 
      });
    },
      buttonUp() {
      const tl = gsap.timeline()
      tl.to('.project__launch__front', { 
          top: 0, 
          left:0,
          duration: .3, 
          ease: Back.easeOut.config(4)
      });
    },
  
  },
};
</script>
