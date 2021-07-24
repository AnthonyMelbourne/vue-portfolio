<template>
  <div class="modal-body">
    <div>
      <div class="modal-heading">{{ article.fields.heading }}</div>

      <div class="modal-subheading">{{ article.fields.subHeading }}</div>
    </div>
    <div>
      <dialog-body :content="article.fields.body.content" />
      <div class="modal-subheading">{{ article.fields.author }}</div>
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
  props: ["article"],
};
</script>

<style>
@media (max-width: 599px) {
  .modal-body {
    font-size: 1.6em;
    overflow-y: scroll;
    overflow-x: hidden;
    color: #7b7b7b;
    padding-top: 2.5px;
    padding-left: 2.5px;
    padding-right: 2.5px;
    height: 100%;
    text-align: left;
  }

  .modal-body img {
    width: 100%;
  }
}

@media (min-width: 600px) {
  .modal-body {
    font-size: 1.6em;
    overflow-y: scroll;
    overflow-x: hidden;
    color: #7b7b7b;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    text-align: left;
  }
}

@media (min-width: 980px) {
  .modal-body {
    font-size: 1.6em;
    overflow-y: scroll;
    overflow-x: hidden;
    color: #7b7b7b;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    text-align: left;
  }
}
</style>
