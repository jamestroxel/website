<template>
  <Navigation/>
  <router-view/>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {

    }
  },
  methods: {
  
  }
}
</script>

<style lang="scss">
  @import './styles/index.scss';

</style>
