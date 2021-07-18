<template>
  <div>
    <div v-for="(block, key) in content" :key="key">
      <p v-if="block.nodeType === 'paragraph'">
        {{ block.content[0].value }}
      </p>

      <img
        v-if="block.nodeType === 'embedded-asset-block'"
        :src="block.data.target.fields.file.url"
        :alt="block.data.target.fields.title"
        :title="block.data.target.fields.title"
        :style="imageFloat()"
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
      imageCount: 0
    }
  },
  methods: {
    imageFloat() {
      let count = this.$refs.bodyImage ? this.$refs.bodyImage.length : 0;
      return "float:" + (count % 2 == 0 ? "right" : "left")
    }
  }
};
</script>

<style></style>