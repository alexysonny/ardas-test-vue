<template>
  <li>{{ tag }}</li>
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

<style></style>
