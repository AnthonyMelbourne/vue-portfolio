<template>
  <div>
    <div v-if="open" class="backdrop" @click="$emit('close')"></div>

    <dialog open v-if="open">
      <button type="button" class="close" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>

      <music-review-dialog
        v-if="content.type === 'music'"
        :article="content.article"
      />
      <movie-review-dialog
        v-if="content.type === 'movie'"
        :article="content.article"
      />
      <game-review-dialog
        v-if="content.type === 'game'"
        :article="content.article"
      />
    </dialog>
  </div>
</template>

<script>
import MusicReviewDialog from "./dialogs/MusicReviewDialog.vue";
import MovieReviewDialog from "./dialogs/MovieReviewDialog.vue";
import GameReviewDialog from "./dialogs/GameReviewDialog.vue";

export default {
  components: { MovieReviewDialog, MusicReviewDialog, GameReviewDialog },
  props: ["open", "content"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 10px;
  bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;
  z-index: 100;

  border: #bfa317 3px solid;
  margin-top: 25px;
  width: 90%;
  max-height: 90%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 24px;
}
</style>
