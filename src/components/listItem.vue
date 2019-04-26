<template>
  <li>
    <list-item-heading />
    <tags-list />
  </li>
</template>

<script>
import TagsList from "./tagsList.vue";
import ListItemHeading from "./listItemHeading.vue";
export default {
components: {
  TagsList,
  ListItemHeading
}
}
</script>

<style>

</style>
