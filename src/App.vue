<template>
  <div id="app">
    <site-header></site-header>
    <navigation></navigation>
    <section class="outer-border">
      <section class="middle-border">
        <section class="inner-border">
          <section class="content-parent">
            <router-view
              @openModal="showDialog"
            />
          </section>
        </section>
      </section>
    </section>
    <site-footer></site-footer>
    <site-modal
      :open="dialogIsVisible"
      :content="dialogContent"
      @close="dialogIsVisible = false"
    />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Navigation from "./components/Navigation.vue";
import SiteModal from "./components/SiteModal.vue";
import "@/assets/legacy.css";

export default {
  data() {
    return {
      dialogIsVisible: false,
      dialogContent: {},
    };
  },
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
    Navigation,
    SiteModal,
  },
  methods: {
    showDialog(data) {
      this.dialogContent = data;
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style></style>
