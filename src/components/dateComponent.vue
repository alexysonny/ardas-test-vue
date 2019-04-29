<template>
  <p>{{ getDate }}</p>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: ""
    }
  },
  computed: {
    getDate() {
      return this.date ? new Date(this.date).toDateString() : "";
    }
  }
};
</script>

<style></style>
