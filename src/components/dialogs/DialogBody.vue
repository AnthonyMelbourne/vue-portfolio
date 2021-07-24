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
        :style="imageFloat(block.data.target.sys.id)"
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
      imageAlign: [],
    };
  },
  methods: {
    imageFloat(id) {
      let count = 0;
      this.imageAlign.forEach((imageId, index) => {
        if (id == imageId) {
          count = index;
        }
      });
      return "float:" + (count % 2 == 0 ? "left" : "right");
    },
  },
  mounted() {
    this.content.forEach((block) => {
      if (block.nodeType === "embedded-asset-block") {
        this.imageAlign.push(block.data.target.sys.id);
      }
    });
  },
};
</script>

<style>
@media (max-width: 599px) {
  .modal-body img {
    filter: none;
    width: 100%;
  }
}

@media (min-width: 600px) {
  .modal-body img {
    filter: none;
    width: 60%;
  }
}

@media (min-width: 980px) {
  .img {
    filter: none;
    max-width: 40%;
  }
}
</style>
