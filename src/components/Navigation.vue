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
      <button
        class="hamburger hamburger--spin"
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        :class="{
          'is-active': mobileMenuIsVisible
        }"
        @click="mobileMenuIsVisible = !mobileMenuIsVisible"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <mobile-menu
        class="mobile-menu"
        :style="{
          'left': mobileMenuPosition
        }"
      ></mobile-menu>
    </nav>
  </nav>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";

export default {
  data() {
    return {
      mobileMenuIsVisible: true,
    };
  },
  computed: {
    mobileMenuPosition() {
      return this.mobileMenuIsVisible ? '0' : '-250px';
    }
  },
  watch:{
    $route () {
      this.mobileMenuIsVisible = false;
    }
  },
  name: "Navigation",
  components: {
    MobileMenu,
  },
  methods: {
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
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 186px;
    left: -250px;
    background-color: black;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    opacity: 1;
  }
}
</style>
