<template>
  <div id="app">
  <site-header></site-header>
  <navigation></navigation>
    <router-view />
      <site-footer></site-footer>
  </div>
</template>


<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import Navigation from './components/Navigation.vue'
import "@/assets/legacy.css";


export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
    Navigation
  }
}
</script>

<style>

</style>
