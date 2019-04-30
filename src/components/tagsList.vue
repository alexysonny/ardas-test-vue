<template>
  <ul class="tags-list">
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

<style lang="scss">
.tags-list {
  list-style: none;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
}
</style>
