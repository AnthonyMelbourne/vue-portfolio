<template>
  <div id="app" class="main-content">
    <header class="content-header">
      <div class="heading">Movie Reviews</div>
      <div class="sub-heading">(click image to open)</div>
    </header>

    <section class="image-gallery">
      <div v-for="(movie, key) in movies" :key="key">
        <img
          :src="movie.fields.cover.fields.file.url"
          alt="Cover Art"
          @click="openReview(movie)"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MovieReviews",
  data() {
    return {
      movies: [],
      loading: true,
    };
  },
  methods: {
    openReview(movieObject) {
      this.$emit("openModal", {
        type: "movie",
        article: movieObject,
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
    this.load();
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  text-align: center;
}
img {
  height: 99%;
  width: 99%;
  padding: 1%;
  cursor: pointer;
}
</style>
