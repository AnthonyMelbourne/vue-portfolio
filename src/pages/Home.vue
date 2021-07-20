<template>
  <div class="main-content">
    <div class="left-content">
      <h1>Featured Reviews</h1>
      <li>(click image to open)</li>
      <section class="left-content-inner-border">
        <!-- LEFT CONTENT FEATURED REVIEWS -->
        <!-- FEATURED GAME -->
        <div class="featured">
          <div class="featured-excerpt">
            <p>"{{ featuredGame.fields.description }}"</p>
          </div>
          <div class="featured-excerpt">
            <img
              class="featured-game-thumbnail"
              :src="featuredGame.fields.cover.fields.file.url"
              @click="openReview(game)"
            />
          </div>
        </div>
        <!-- FEATURED ALBUM -->
        <div class="featured">
          <div class="featured-excerpt">
            <img
              class="featured-album-thumbnail"
              :src="featuredMusic.fields.cover.fields.file.url"
              @click="openReview(music)"
            />
          </div>
          <div class="featured-excerpt">
            <p>"{{ featuredMusic.fields.description }}"</p>
          </div>
        </div>
        <!-- FEATURED MOVIE -->
        <div class="featured">
          <div class="featured-excerpt">
            <p>"{{ featuredMovie.fields.description }}"</p>
          </div>
          <div class="featured-excerpt">
            <img
              class="featured-movie-thumbnail"
              :src="featuredMovie.fields.cover.fields.file.url"
              @click="openReview(movie)"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="right-content">
      <router-link to="./music/reviews">
        <h1>Music Reviews</h1>
      </router-link>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(music[0])">
            {{ music[0].fields.heading }} -
            {{ music[0].fields.subHeading }}
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(music)">
            {{ music[1].fields.heading }} -
            {{ music[1].fields.subHeading }}
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(movies)">
            {{ music[2].fields.heading }} -
            {{ music[2].fields.subHeading }}
          </button>
        </div>
      </div>

      <router-link to="./movie/reviews">
        <h1>Film Reviews</h1>
      </router-link>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(movies)">
            {{ movies[0].fields.heading }} -
            {{ movies[0].fields.year }}
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(movies)">
            {{ movies[1].fields.heading }} -
            {{ movies[1].fields.year }}
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(movies)">
            {{ movies[2].fields.heading }} -
            {{ movies[2].fields.year }}
          </button>
        </div>
      </div>

      <router-link to="./game/reviews">
        <h1>Games Reviews</h1>
      </router-link>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(game)">
            {{ games[0].fields.heading }} -
            {{ games[0].fields.subHeading }}
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(game)">
            {{ games[1].fields.heading }} -
            {{ games[1].fields.subHeading }}
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button @click="openReview(game)">
            {{ games[2].fields.heading }} -
            {{ games[2].fields.subHeading }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      featuredMusic: {},
      featuredMovie: {},
      featuredGame: {},
      music: [],
      movies: [],
      games: [],
    };
  },
  methods: {
    loadMusic() {
      this.$contentful
        .getEntries({
          content_type: "music",
          order: "-sys.createdAt",
          limit: 4,
        })
        .then((res) => {
          this.featuredMusic = res.items.shift();
          this.music = res.items;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadMovies() {
      this.$contentful
        .getEntries({
          content_type: "movie",
          order: "-sys.createdAt",
          limit: 4,
        })
        .then((res) => {
          this.featuredMovie = res.items.shift();
          this.movies = res.items;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadGames() {
      this.$contentful
        .getEntries({
          content_type: "game",
          order: "-sys.createdAt",
          limit: 4,
        })
        .then((res) => {
          this.featuredGame = res.items.shift();
          this.games = res.items;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openReview(gameObject, musicObject, movieObject) {
      this.$emit("openModal", {
        type: "movie, game, music",
        article: gameObject,
        musicObject,
        movieObject,
      });
    },
    load() {
      this.$contentful
        .getEntries({
          content_type: "movie, game, music",
          order: "-sys.createdAt",
        })
        .then((res) => {
          this.movies = res.items;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadMusic();
    this.loadMovies();
    this.loadGames();
    this.load();
  },
};
</script>

<style>
.main-content {
  display: flex;
  flex-direction: row;
}
</style>
