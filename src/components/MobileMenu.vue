<template>
  <div
    id="burger"
    :class="{
      active: active,
    }"
    @click="toggleActive"
  >
    <nav>
      <ul>
        <li>
          <button><router-link to="/">Home</router-link></button>
        </li>
        <li>
          <button>
            <router-link to="/music/reviews">Album Reviews</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/movie/reviews">Gig Reviews</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/game/reviews">Game Reviews</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/music/reviews">Walkthroughs</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/movie/reviews">Movie Reviews</router-link>
          </button>
        </li>
        <li>
          <button>
            <router-link to="/game/reviews">Top 10's</router-link>
          </button>
        </li>
        <li>
          <button><router-link to="/">Store</router-link></button>
        </li>
      </ul>
    </nav>

    <!-- OLD MOBILE MENU CLOSE ICON -->
    <!-- <div class="mobile-menu-close">
        <i id="mobile-menu-close" class="fas fa-times fa-4x"></i>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    // toggleActive() {
    //   this.$emit("toggle-menu");
    // },
  },
};
</script>

<style></style>
