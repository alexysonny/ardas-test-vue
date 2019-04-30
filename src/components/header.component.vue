<template>
  <header>
    <router-link v-if="isShowBackBtn" :to="'/'">Back</router-link>
    <h1>Task List</h1>
  </header>
</template>

<script>
export default {
  computed: {
    isShowBackBtn() {
      console.log(this.$route);
      return this.$route.name === "edit";
    }
  }
};
</script>

<style lang="scss">
header {
  width: 100%;
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-template-rows: 50px;
  justify-items: center;
  align-items: center;
  border-bottom: solid 1px #e4e4e4;
  margin-bottom: 15px;
  a {
    grid-area: 1 / 1 / 2 / 2;
  }
  h1 {
    grid-area: 1 / 1 / 2 / 3;
    margin: 0;
  }
}
</style>
