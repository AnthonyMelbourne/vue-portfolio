<template>
  <div id="app">
    <site-header></site-header>
    <navigation></navigation>
    <section class="outer-border">
      <section class="middle-border">
        <section class="inner-border">
          <section class="content-parent">
            <router-view />
          </section>
        </section>
      </section>
    </section>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Navigation from "./components/Navigation.vue";
import "@/assets/legacy.css";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
    Navigation,
  },
};
</script>

<style></style>
