<template>
 <div class="project">
   <div class="project__wrapper">
       <div class="project__title__wrapper">
            <h1 class="loudMusic__project__title">A Decade of Loud Music</h1>
       <p class="project__feature__text__title">Tools <span class="project__feature__tool">D3</span><span class="project__feature__tool">Socrata</span></p>
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
          class="project__launch__front"
          href="https://jamestroxel.github.io/decade-of-loud-music/"
          target="_blank"
          >Launch Project</a
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
          <p class="project__title__view">
          This visualization reimagines the past decade's worth of #311 "loud
          music" complaint data as a series of concentric rings of varying
          thicknesses made to resemble a vinyl record, speaker, or sound wave.
          The width of each ring is determined by the count for each month and a
          tool tip allows the user to hover over each of these to reveal the
          total number of complaints for the month.
          </p>
        </div>
        <figure id="teaserTrigger" class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img
            class="project__hero__image"
            src="../assets/top.png"
          />
        </figure>
        <p class="project__footnote">Top of page</p>
        <p class="project__text">
          Given the lighter subject matter, I took this as an opportunity to celebrate the formal quality of the data when plotted in such a way. The result is a zine-like graphic treatment of the content and layout. 
        </p>
        <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/tooltip.png" />
        </figure>
        <p class="project__footnote">Interactive tool tip</p>
        <p class="project__text">
          The data was gathered from roughly 25 million 311 call records stored
          in NYC Open Data's Socrata database. The majority of the analysis was done
          in the query itself by stringing together a series of SoQL clauses to
          extract the complaint type, and then count and group by month and&nbsp;year.
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
  name: "DecadeOfLoudMusic",
  data() {
    return {};
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
          duration: .35, 
          ease: Back.easeOut.config(4) 
      });
    },
  
  },
};
</script>
