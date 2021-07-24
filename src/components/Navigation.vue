<template>
  <nav id="app" class="nav-parent">
    <div class="desktop-navbar-buttons">
      <ul>
        <li class="button">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="button" id="music-button">
          Music
          <nav class="dropdown-menu" id="music-1">
            <ul class="menu-item-list">
              <li><i class="fas fa-music"></i></li>

              <li>
                <router-link to="/music/reviews">Reviews</router-link>
              </li>
              <li><router-link to="/">Interviews</router-link></li>
            </ul>
          </nav>
        </li>
        <li class="button" id="film-button">
          Movies
          <nav class="dropdown-menu" id="film-2">
            <ul class="menu-item-list">
              <li><i class="fas fa-film"></i></li>
              <li>
                <router-link to="/movie/reviews">Reviews</router-link>
              </li>
              <li><router-link to="/">Top 10's</router-link></li>
            </ul>
          </nav>
        </li>

        <li class="button" id="games-button">
          Games
          <nav class="dropdown-menu" id="games-3">
            <ul class="menu-item-list">
              <li><i class="fas fa-gamepad"></i></li>
              <li>
                <router-link to="/game/reviews">Reviews</router-link>
              </li>
              <li><router-link to="/">Guides</router-link></li>
            </ul>
          </nav>
        </li>
        <li class="button"><router-link to="/">Store</router-link></li>
      </ul>
    </div>

    <nav>
      <!-- <div id="mobile-menu">
        <i
          @click="mobileMenuIsVisible"
          class="fas fa-bars fa-4x"
          id="mobile-menu-open"
        ></i>
      </div> -->

      <button
        class="hamburger hamburger--spin"
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <nav
        id="navigation mobileMenu"
        class="mobile-menu show-menu"
        style="width: 180px;"
      >
        <mobile-menu
          id="mobile-menu"
          @toggle-menu="menuActive = !menuActive"
          :active="menuActive"
        ></mobile-menu>
      </nav>

      <!-- <mobile-menu
      :class="mobile - menu"
      :open="mobileMenuIsVisible"
      :content="mobileMenuContent"
      @close="mobileMenuIsVisible = false"
    /> -->
    </nav>
  </nav>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";

export default {
  data() {
    return {
      mobileMenuIsVisible: false,
      mobileMenuContent: {},
    };
  },
  name: "Navigation",
  compnents: {
    MobileMenu,
  },
  methods: {
    toggleMenu() {
      this.$emit("menu-active");
    },
    openMobileMenu(data) {
      this.mobileMenuContent = data;
      this.mobileMenuIsVisible = true;
    },
    closeMobileMenu() {
      this.mobileMenuIsVisible = false;
    },
  },
};
</script>

<style scoped>
.desktop-navbar-buttons .button:hover .dropdown-menu {
  display: block;
}
.menu-item-list {
  display: flex;
  flex-direction: column;
  z-index: 1;
}
nav {
  z-index: 3;
}

@media (max-width: 599px) {
  .desktop-navbar-buttons {
    display: none;
  }
  .mobile-menu {
    display: none;
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: black;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    opacity: 1;
  }
}
</style>
