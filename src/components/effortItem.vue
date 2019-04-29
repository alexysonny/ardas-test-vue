<template>
  <div>{{ title }}{{ time }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      datefault: ""
    },
    time: {
      type: Number,
      datefault: 0
    }
  }
};
</script>

<style></style>
