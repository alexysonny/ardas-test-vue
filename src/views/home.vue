<template>
  <div>
    <header-component />
    <task-list />
  </div>
</template>

<script>
import TaskList from "./../containers/taskList.vue";
import HeaderComponent from "./../components/header.component.vue";

export default {
  components: {
    TaskList,
    HeaderComponent
  },
  data() {
    return {};
  }
};
</script>
