<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list__item">
        <div class="navigation__spinner__wrapper">
          <p class="navigation__spinner">Design &darr; &darr; &darr;</p>
          <router-link to="/" class="navigation__list__link"
            >James Troxel</router-link
          >
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
      <li class="navigation__list__item">
        <div class="navigation__list__link">&bull;</div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
  updated() {},
  computed: {},
  created() {},
  mounted() {
    window.onload = this.displayClock();
  },
  methods: {
    displayClock() {
      const display = new Date().toLocaleTimeString();
      const clock = document.querySelector(".navigation__spinner");
      clock.innerHTML = display;
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
