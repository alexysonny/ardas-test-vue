<template>
  <div class="edit-task__layout">
    <div class="edit-task__item">
      <list-item-heading
        :name="task.name"
        :editable="true"
        :highPriority="task.is_high_priority"
        @missClick="editTaskHangler($event)"
      />
      <description-component :description="task.description"/>
      <tags-list :tags="task.tags"/>
      <div class="edit-task__effort">
        <effort-item :title="constants.estimetedTime" :time="task.estimated_effort"/>
        <effort-item :title="constants.actualTime" :time="task.actual_effort"/>
      </div>
      <date-component :date="task.due_date"/>
    </div>
  </div>
</template>

<script>
import ListItemHeading from "./../components/listItemHeading.vue";
import EffortItem from "./../components/effortItem.vue";
import DateComponent from "./../components/date.component.vue";
import DescriptionComponent from "./../components/description.component.vue";
import TagsList from "./../components/tagsList.vue";
export default {
  components: {
    ListItemHeading,
    EffortItem,
    DateComponent,
    DescriptionComponent,
    TagsList
  },
  props: {
    task: {
      type: Object,
      default: () => {
        return {
          name: "",
          estimated_effort: 0,
          actual_effort: 0,
          tags: [],
          due_date: ""
        };
      }
    }
  },
  data() {
    return {
      constants: {
        estimetedTime: "Общая оценка: ",
        actualTime: "Потрачено: "
      }
    };
  },
  methods: {
    editTaskHangler(data) {
      console.log("data ", data);
      const updatedTask = Object.assign({}, this.task, { name: data });
      console.log("updatedTask", updatedTask);
      this.$emit("updateTask", updatedTask);
    }
  }
};
</script>

<style lang="scss">
.edit-task {
  &__layout {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
  }
  &__item {
    display: grid;
    grid-template-rows: 35px;
    grid-auto-rows: 35px;
    grid-row-gap: 10px;
    width: 600px;
    padding: 10px;
    border: solid 1px #e4e4e4;
    border-radius: 5px;
  }
  &__effort {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
