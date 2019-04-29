<template>
  <li class="tag-item">{{ tag }}</li>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.tag-item {
  width: max-content;
  border: solid #e4e4e4 1px;
  border-radius: 5px;
  text-align: center;
  padding: 5px 10px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
