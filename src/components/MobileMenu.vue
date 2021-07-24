<template>
  <div class="mobile-parent">
    <nav>
      <ul class="mobile-menu">
        <li>
          <div>
            <router-link to="/">Home</router-link>
          </div>
        </li>

        <img class="wire-separator" src="https://svgsilh.com/svg/3104944.svg" />

        <li>
          <div>
            <router-link to="/music/reviews">Album Reviews</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/">Gig Reviews</router-link>
          </div>
        </li>

        <img class="wire-separator" src="https://svgsilh.com/svg/3104944.svg" />

        <li>
          <div>
            <router-link to="/game/reviews">Game Reviews</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/">Game Guides</router-link>
          </div>
        </li>

        <img class="wire-separator" src="https://svgsilh.com/svg/3104944.svg" />

        <li>
          <div>
            <router-link to="/movie/reviews">Movie Reviews</router-link>
          </div>
        </li>
        <li>
          <div>
            <router-link to="/">Top 10's</router-link>
          </div>
        </li>

        <img class="wire-separator" src="https://svgsilh.com/svg/3104944.svg" />

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
  text-align: right;
}

.mobile-menu a:hover {
  color: #9e8820;
}

nav ul {
  list-style-type: none;
}

.wire-separator {
  filter: invert(48%) sepia(20%) saturate(1500%) hue-rotate(10deg)
    brightness(100%) contrast(100%);
  width: 60%;
}

.wire-separator:hover {
  filter: invert(47%) sepia(18%) saturate(1488%) hue-rotate(9deg)
    brightness(90%) contrast(10%);
}
</style>
