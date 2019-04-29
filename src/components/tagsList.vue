<template>
  <ul>
    <tag-item v-for="(tag, index) in tags" :key="index" :tag="tag" />
  </ul>
</template>

<script>
import TagItem from "./tagItem.vue";
export default {
  props: {
    tags: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    TagItem
  }
};
</script>

<style></style>
