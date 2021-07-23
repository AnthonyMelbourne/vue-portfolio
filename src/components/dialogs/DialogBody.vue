<template>
  <div>
    <div v-for="(block, key) in content" :key="key">
      <p v-if="block.nodeType === 'paragraph'">
        {{ block.content[0].value }}
      </p>
      <img
        class="img"
        v-if="block.nodeType === 'embedded-asset-block'"
        :src="block.data.target.fields.file.url"
        :alt="block.data.target.fields.title"
        :title="block.data.target.fields.title"
        :style="imageFloat(block.data.target.fields.file.url)"
        ref="bodyImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {
      images: [],
    };
  },
  methods: {
    imageFloat(url) {
      this.images[url] = this.images.length + 1;
      let count = this.$refs.bodyImage ? this.$refs.bodyImage.length : 0;
      return "float:" + (count % 2 == 0 ? "right" : "left");
    },
  },
};
</script>

<style>
.img {
  filter: none;
  max-width: 40%;
}
</style>
