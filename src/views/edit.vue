<template>
  <div>
    <header-component />
    <edit-task-layout
      :task="getCurrentTask"
      @updateTask="updateTaskHandler($event)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EditTaskLayout from "./../containers/editTaskLayout.vue";
import HeaderComponent from "./../components/header.component.vue";
export default {
  components: {
    EditTaskLayout,
    HeaderComponent
  },
  computed: {
    ...mapGetters(["getCurrentTask"])
  },
  data() {
    return {
      currentRoute: ""
    };
  },
  mounted() {
    this.getCurrentTaskId(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getCurrentTaskId", "updateTask"]),
    updateTaskHandler(data) {
      this.updateTask(data);
    }
  }
};
</script>

<style></style>
