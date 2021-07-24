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
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 10px;
  bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding-bottom: 1rem;
  margin-bottom: 10px;
  background-color: #fff;
  z-index: 100;
  border: #bfa317 3px solid;
  margin-top: 25px;
  width: 90%;
  height: 85%;
}

@media (max-width: 599px) {
  dialog {
    position: fixed;
    top: 10px;
    right: 0;
    left: 0;
    bottom: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
    padding-bottom: 1rem;
    margin-bottom: 10px;
    background-color: #fff;
    z-index: 100;
    border: #bfa317 1px solid;
    margin-top: 25px;
    width: 80%;
    height: 80%;
  }
}
</style>
