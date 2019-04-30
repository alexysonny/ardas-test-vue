<template>
  <div>{{ title }}{{ time }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    time: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style></style>
