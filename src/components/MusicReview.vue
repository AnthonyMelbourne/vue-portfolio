<template>
  <div>
    <h1>{{ article.fields.heading }}</h1>

    <h2>{{ article.fields.subHeading }}</h2>

    <div v-for="(block, key) in article.fields.body.content"
      :key="key"
    >
      <p v-if="block.nodeType === 'paragraph'">
        {{ block.content[0].value }}
      </p>
    </div>

    <iframe
      v-if="article.fields.youtubeUrl.length > 0"
      width="560"
      height="315"
      :src="article.fields.youtubeUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
  </div>
</template>

<script>
export default {
  props: ['article']
};
</script>

<style scoped>
</style>
