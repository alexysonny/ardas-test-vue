<template>
  <div class="task-layout">
    <ul class="task-list">
      <list-item v-for="task in getActiveTasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "./../components/listItem.vue";
export default {
  components: {
    ListItem
  },
  computed: {
    ...mapGetters(["getActiveTasks"])
  }
};
</script>

<style lang="scss">
.task-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.task-list {
  width: 550px;
  list-style: none;
}
</style>
