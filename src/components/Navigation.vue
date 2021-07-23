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
              <li><a href="UNDER-CONSTRUCTION.html">Interviews</a></li>
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
              <li><a href="UNDER-CONSTRUCTION.html">Top 10's</a></li>
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
              <li><a href="UNDER-CONSTRUCTION.html">Guides</a></li>
            </ul>
          </nav>
        </li>
        <li class="button"><a href="UNDER-CONSTRUCTION.html">Store</a></li>
      </ul>
    </div>

    <nav>
      <div id="mobile-menu">
        <i
          @click="mobileMenuIsVisible"
          class="fas fa-bars fa-4x"
          id="mobile-menu-open"
        ></i>
      </div>

      <mobile-menu
        @toggle-menu="menuActive = !menuActive"
        :active="menuActive"
      ></mobile-menu>

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
}
</style>
