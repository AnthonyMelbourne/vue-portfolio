<template>
  <div id="app" class="main-content">
    <div class="image-gallery">
      <div v-for="(game, key) in game" :key="key">
        <img :src="game.fields.cover.fields.file.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameReviews",
  data() {
    return {
      game: [],
      loading: true,
    };
  },
  methods: {
    load() {
      this.$contentful
        .getEntries({
          content_type: "game",
        })
        .then((res) => {
          this.game = res.items;
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
  height: 320px;
  width: 230px;
}
</style>
