<template>
  <div>
    <nav>
      <ul class="mobile-menu">
        <li>
          <div>
            <router-link to="/">Home</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/music/reviews">Album Reviews</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/movie/reviews">Gig Reviews</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/game/reviews">Game Reviews</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/music/reviews">Walkthroughs</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/movie/reviews">Movie Reviews</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/game/reviews">Top 10's</router-link>
          </div>
        </li>
        <li>
          <div><router-link to="/">Store</router-link></div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
};
</script>

<style>
.mobile-menu a {
  text-decoration: none;
  font-family: "UnifrakturCook", cursive;
  font-size: 1.5rem;
  color: #818181;
}

.mobile-menu a:hover {
  color: #bfa317;
}

nav ul {
  list-style-type: none;
}
</style>
