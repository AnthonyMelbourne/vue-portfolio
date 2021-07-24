<template>
  <div class="main-content">
    <div class="left-content">
      <div class="left-content-heading">Featured Reviews</div>
      <div class="left-content-subheading">(click image to open)</div>
      <section class="left-content-inner-border">
        <!-- LEFT CONTENT FEATURED REVIEWS -->
        <!-- FEATURED GAME -->
        <loading-block v-if="loadingGames" />
        <div class="featured" v-else>
          <div class="featured-excerpt">
            <p class="featured-description">
              "{{ featuredGame.fields.description }}"
            </p>
          </div>
          <div class="featured-excerpt">
            <img
              class="featured-thumbnail"
              :src="featuredGame.fields.cover.fields.file.url"
              @click="openReview(featuredGame, 'game')"
            />
          </div>
        </div>
        <!-- FEATURED ALBUM -->
        <loading-block v-if="loadingMusic" />
        <div class="featured" v-else>
          <div class="featured-excerpt">
            <img
              class="featured-thumbnail"
              :src="featuredMusic.fields.cover.fields.file.url"
              @click="openReview(featuredMusic, 'music')"
            />
          </div>
          <div class="featured-excerpt">
            <p class="featured-description">
              "{{ featuredMusic.fields.description }}"
            </p>
          </div>
        </div>
        <!-- FEATURED MOVIE -->
        <loading-block v-if="loadingMovies" />
        <div class="featured" v-else>
          <div class="featured-excerpt">
            <p class="featured-description">
              "{{ featuredMovie.fields.description }}"
            </p>
          </div>
          <div class="featured-excerpt">
            <img
              class="featured-thumbnail"
              :src="featuredMovie.fields.cover.fields.file.url"
              @click="openReview(featuredMovie, 'movie')"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="right-content">
      <router-link to="./music/reviews">
        <h1>Music Reviews</h1>
      </router-link>

      <div
        v-for="row in music"
        :key="row.sys.id"
        class="right-content-outer-border"
      >
        <div class="review-link">
          <button @click="openReview(row, 'music')">
            {{ row.fields.heading }} - {{ row.fields.subHeading }}
          </button>
        </div>
      </div>

      <router-link to="./movie/reviews">
        <h1>Film Reviews</h1>
      </router-link>
      <div
        v-for="row in movies"
        :key="row.sys.id"
        class="right-content-outer-border"
      >
        <div class="review-link">
          <button @click="openReview(row, 'movie')">
            {{ row.fields.heading }} - {{ row.fields.year }}
          </button>
        </div>
      </div>

      <router-link to="./game/reviews">
        <h1>Games Reviews</h1>
      </router-link>
      <div
        v-for="row in games"
        :key="row.sys.id"
        class="right-content-outer-border"
      >
        <div class="review-link">
          <button @click="openReview(row, 'game')">
            {{ row.fields.heading }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingBlock from "../components/LoadingBlock.vue";

export default {
  name: "Home",
  data() {
    return {
      loadingMusic: true,
      loadingMovies: true,
      loadingGames: true,
      featuredMusic: {},
      featuredMovie: {},
      featuredGame: {},
      music: [],
      movies: [],
      games: [],
    };
  },
  components: {
    LoadingBlock,
  },
  methods: {
    loadMusic() {
      this.$contentful
        .getEntries({
          content_type: "music",
          order: "-sys.updatedAt",
          limit: 4,
        })
        .then((res) => {
          this.featuredMusic = res.items.shift();
          this.music = res.items;
          this.loadingMusic = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadMovies() {
      this.$contentful
        .getEntries({
          content_type: "movie",
          order: "-sys.updatedAt",
          limit: 4,
        })
        .then((res) => {
          this.featuredMovie = res.items.shift();
          this.movies = res.items;
          this.loadingMovies = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadGames() {
      this.$contentful
        .getEntries({
          content_type: "game",
          order: "-sys.updatedAt",
          limit: 4,
        })
        .then((res) => {
          this.featuredGame = res.items.shift();
          this.games = res.items;
          this.loadingGames = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openReview(articleObject, articleType) {
      this.$emit("openModal", {
        type: articleType,
        article: articleObject,
      });
    },
  },
  mounted() {
    this.loadMusic();
    this.loadMovies();
    this.loadGames();
  },
};
</script>

<style scoped>
@media (max-width: 599px) {
  .featured-description {
    display: none;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    text-align: center;
  }
}
</style>
