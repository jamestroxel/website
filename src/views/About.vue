<template>
 <div class="project">
    <div class="project__wrapper">
        <div class="project__title__wrapper">
                <h1 class="loudMusic__project__title">James Troxel</h1>
        <p class="project__feature__text__title">Email: james.r.troxel@gmail.com</p>
            <div class='project__launch__wrapper'>
            <a
            class="project__launch__back"
            >Contact</a
            >
            <a
            @mouseover="buttonOver"
            @mouseout="buttonOut"
            @mousedown="buttonDown"
            @mouseup="buttonUp"
            class="project__launch__front"
            href="mailto:james.r.troxel.com"
            >Contact</a
            >
            </div>
            <div class="features__wrapper">
            <!-- <p class="project__feature__text__title">Tools</p>
                <p class="project__feature__tools">D3 &bull; Socrata &bull;</p> -->
            </div>
        </div>
        <section class="project__details">
            <div class="project__title__view__wrapper">
                <p class="project__title__view__label"> Scroll down to read more <span class="arrow">&darr;</span></p>
                <p class="project__title__view">James Troxel is an experienced, full-stack designer with a specialization in data visualization and an impulse to tell a story.</p>
            </div>
            <div class="project__section__wrapper">
              <figure id="teaserTrigger"  class="project__hero__portrait">
                  <div class="project__hero__ui">&bull; &bull; &bull;</div>
                  <img
                      class="project__hero__image__portrait"
                      src="../assets/DSC_8305_Headshot_1_714x1000.jpg"
                  />
              </figure>
              <div class="about__text__wrapper">
                <p  class="about__text">
                James has established a unique position within the creative field that brings together a broad array of highly refined skillsets that include commercial print-production, book-binding, graphic design, art direction, web development and data visualization.</p>
                <p class="about__text">
                He studied painting at The School of Visual Arts, earning his BFA there in 2009, and earned a Master of Science degree in Data Visualization from Parsons School of Design in 2021.</p>
              </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>


import { gsap, Back } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "DecadeOfLoudMusic",
  data() {
    return {};
  },
    mounted: function () {
    this.titleView  = gsap.timeline({
      scrollTrigger: {
        trigger: '#teaserTrigger',
        start: "top bottom",
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
          duration: .35, 
          ease: Back.easeOut.config(4) 
      });
    },
  
  },
};
</script>
