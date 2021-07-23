<template>
  <div class="modal-body">
    <div>
      <div class="modal-heading">{{ article.fields.heading }}</div>

      <div class="modal-subheading">{{ article.fields.subHeading }}</div>
    </div>
    <div>
      <dialog-body :content="article.fields.body.content" />

      <iframe
        v-if="article.fields.youtubeUrl.length > 0"
        width="560"
        height="315"
        :src="article.fields.youtubeUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
import DialogBody from "./DialogBody.vue";

export default {
  components: { DialogBody },
  props: ["article"]
};
</script>

<style>

</style>
