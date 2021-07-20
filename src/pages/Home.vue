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
      <a href="./HTML/music-reviews.html">
        <h1>Music Reviews</h1>
      </a>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button>
            NOT DEFEATED SANITY - The Sanguinary Impetus
          </button>
          <!-- <h1>{{ music.value.fields.heading }}</h1> -->
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-album3">
            MAKE THEM SUFFER - How To Survive A Funeral
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-album4">
            BLEED FROM WITHIN - Fracture
          </button>
        </div>
      </div>

      <a href="./HTML/film-reviews.html">
        <h1>Film Reviews</h1>
      </a>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-movie2">
            Love and Monsters (2020)
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-movie3">
            The Hunt (2020)
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-movie4">
            The New Mutants (2020)
          </button>
        </div>
      </div>

      <a href="./HTML/game-reviews.html">
        <h1>Game Reviews</h1>
      </a>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-game2">
            Call Of : Modern Warfare
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-game3">
            Red Dead Redemption 2
          </button>
        </div>
      </div>
      <div class="right-content-outer-border">
        <div class="review-link">
          <button class="modal-open " data-modal="featured-game4">
            Player Unknown's : Battlegrounds
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
          content_type: "movie",
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
