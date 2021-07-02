<template>
  <div id="app" class="main-content">
    <div class="image-gallery">
      <div v-for="(movie, key) in movies" :key="key">
        <img :src="movie.fields.cover.fields.file.url" alt="" />
      </div>
    </div>
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
    load() {
      this.$contentful
        .getEntries({
          content_type: "movie",
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
img {
  width: 230px;
  height: 366px;
}
</style>
