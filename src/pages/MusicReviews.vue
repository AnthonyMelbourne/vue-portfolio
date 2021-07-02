<template>
  <div id="app" class="main-content">
    <div class="image-gallery">
      <div v-for="(music, key) in music" :key="key">
        <img :src="music.fields.cover.fields.file.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicReviews",
  data() {
    return {
      music: [],
      loading: true,
    };
  },
  methods: {
    load() {
      this.$contentful
        .getEntries({
          content_type: "music",
        })
        .then((res) => {
          this.music = res.items;
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
  height: 247px;
}
</style>
