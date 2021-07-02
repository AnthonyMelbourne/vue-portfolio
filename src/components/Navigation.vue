<template>
  <nav class="nav-parent">
    <div class="desktop-navbar-buttons">
      <ul>
        <li class="button"><a href="../index.html">Home</a></li>
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
                <router-link to="/movies/reviews">Reviews</router-link>
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
      <div id="mobileMenu" class="mobile-menu">
        <div class="mobile-menu-close">
          <i id="mobile-menu-close" class="fas fa-times fa-4x"></i>
        </div>
        <a href="../index.html">Home</a>
        <a href="music-index.html">Music</a>
        <a href="film-index.html">Movies</a>
        <a href="games-index.html">Games</a>
        <a href="UNDER-CONSTRUCTION.html">Store</a>
      </div>

      <div id="mobile-menu">
        <i class="fas fa-bars fa-4x" id="mobile-menu-open"></i>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
.desktop-navbar-buttons .button:hover .dropdown-menu {
  display: block;
}
.menu-item-list {
  display: flex;
  flex-direction: column;
}
</style>
