<template>
  <div id="app" class="main-content">
    <header class="content-header">
      <div class="heading">Album Reviews</div>
      <div class="sub-heading">(click image to open)</div>
    </header>

    <section class="image-gallery">
      <div v-for="(music, key) in music" :key="key">
        <img
          :src="music.fields.cover.fields.file.url"
          alt="Cover Art"
          @click="openReview(music)"
        />
      </div>
    </section>
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
    openReview(musicObject) {
      this.$emit('openModal', {
        type: 'music',
        article: musicObject
      });
    },
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
.main-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  text-align: center;
}
img {
  width: 266px;
  height: 267px;
  cursor: pointer;
}
</style>
