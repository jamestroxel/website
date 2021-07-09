<template>
  <div class="project">
    <div class="project__wrapper">
      <div class="project__title__wrapper">
        <h1 class="kvk__project__title">
          <span>Karpov</span><br /><span>vs.</span><br /><span>Korchnoi</span>
        </h1>
          <p class="project__feature__text__title">Tools <span class="project__feature__tool">Chessboardjs</span><span class="project__feature__tool">D3</span><span class="project__feature__tool">R</span><span class="project__feature__tool">Vue</span></p>
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
          href="https://jamestroxel.github.io/karpovkorchnoi/"
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
          Anatoly Karpov and Viktor Korchnoi often found one another sitting on
          opposite ends of a chessboard throughout the 1970’s. But the contrast
          between their 1974 Candidates Final and 1978 World Chess Championship
          could hardly be sharper. One has come to be regarded as a modern
          classic in tactics, strategy, and chess brilliance between two of the
          game’s best. The other quickly earned notoriety as an example of the
          type of superstition, paranoia, and scandal commonly observed in chess
          lore throughout the game’s rich history. However, a few key
          similarities will emerge as the focus of this visualization project
          that also carry broad implications for the way we extract meaning from
          information. Are there parallels to be drawn between the pressures
          experienced by a grandmaster-level chess player and those experienced
          in our own “misinformation” age?
          </p>
        </div>
        <figure id="teaserTrigger" class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/preview.png" />
        </figure>
        <p class="project__text">
          The story begins in the middle of the action at the chaotic 1978
          final, which has devolved into an absurd melodrama during peak monsoon
          season in the Philippines. Each player has managed to find meaning in
          everything from the the precise color of yogurt, to the seating
          arrangement of hypnotists. Chess at this level is hard enough without
          having to endure a veritable arms race of parapsychologists, murderous
          Ananda Marga yogis, and Soviet operatives doing everything they can to
          subvert your will.
        </p>
        <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/4.png" />
        </figure>
        <p class="project__text">
          The decision-making of each player in the 1974 match is retraced with
          interactive flow diagrams that include the top moves for each position
          pulled from Chessbase’s database of hundreds of thousands of similar
          games played. This highlights the significance of move sequences, as
          well as any deviations from these patterns.
        </p>
        <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/2.png" />
        </figure>
        <p class="project__text">
          Additional research reveals that the strong correlation between chess
          ability and time pressure also indicates the increasing role of
          pattern recognition under high stresses.
        </p>
        <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/3.png" />
        </figure>
        <p class="project__text">
          Analyzing chess as a game of fast pattern recognition processes, and
          slow search processes allows us to see how two fine specimens of
          Kasparov's “Drosophila of reasoning” became so consumed with fear and
          loathing in the Philippines, while having delivered a master class
          only four years prior. Chess trains each player always to be one step
          ahead of every scheme, subplot, feint, decoy, and other deceit. While
          the key is to focus this energy on the 64 squares located within the
          boundaries of the chessboard, research has found this to be easier
          said than done. The roles of pattern recognition and time pressure are
          examined across these two very different scenarios with supporting
          documentation from other historical accounts and written works on
          chess theory, statistics, and cognitive psychology.
        </p>
        <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/karpov-korchnoi-small-1.png" />
        </figure>
        <p class="project__text">
          The visualizations that accompany the game analysis are designed to
          help readers see chess in the same way that a grandmaster does, and in
          so doing, help them to identify similarities between a grandmaster’s
          state of mind and their own.
        </p>
        <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/karpov-korchnoi-small-2.png" />
        </figure>
        <p class="project__text">
          While reading this bizarre story in today’s exhausting, 24-hour,
          280-character media landscape, it is worth asking; Are we under the
          same kind of pressure as a chess genius? Is this reasonable? What ways
          do chess prodigies respond to this pressure and what are the possible
          outcomes?
        </p>
        <figure class="project__hero">
          <div class="project__hero__ui">&bull; &bull; &bull;</div>
          <img class="project__hero__image" src="../assets/KvK_VI-03.png" />
        </figure>
      <h1 class="project__heading">Methodology</h1>
      <p class="project__text">The data collected for this story ranges from textual data gathered from multiple first-hand, written accounts, to quantitative statistics found in game databases and academic research papers. But one thing I was struck by was the amount of available qualitative documentation of the 1978 World Chess Championship, versus the amount of quantitative data used to describe the 1974 match. While it is true that qualitative and quantitative data exist for both events, no one, to my knowledge, was as concerned about who was in the audience, what the weather was like, or what each player ate in the 1974 match, as they were in the 1978 tournament. Conversely, while there are game analyses of the 1978 match, these are not nearly as common as the amount of books that cover game two of the 1974 Candidates Final, and are presented as if more for the sake of posterity than to convey anything particularly revelatory. Embracing this fact by limiting the analysis of the 1978 match to mostly qualitative data, and the 1974 match to quantitative data, helped to underscore just how different these two matches were, as well as to support Sigman’s claim that chess, in its ideal state, functions within a vacuum, ignorant of any factors beyond the current board position.</p>
      </section>
    </div>
  </div>
</template>

<script>
import { gsap, Back } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "KarpovKorchnoi",
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
        duration: .35, 
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
