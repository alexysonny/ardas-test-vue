<template>
  <li class="list-item">
    <router-link :to="`/edit/${task.id}`" class="list-item__item">
      <list-item-heading :name="task.name"/>
      <tags-list :tags="task.tags"/>
      <div>
        <effort-item :title="constants.estimetedTime" :time="task.estimated_effort"/>
        <effort-item :title="constants.actualTime" :time="task.actual_effort"/>
      </div>
      <date-component :date="task.due_date"/>
    </router-link>
  </li>
</template>

<script>
import TagsList from "./tagsList.vue";
import ListItemHeading from "./listItemHeading.vue";
import EffortItem from "./effortItem.vue";
import DateComponent from "./dateComponent.vue";
export default {
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
  components: {
    TagsList,
    ListItemHeading,
    EffortItem,
    DateComponent
  }
};
</script>

<style lang="scss">
.list-item {
  /* width: 100%; */
  border: solid #e4e4e4 1px;
  border-radius: 5px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  &__item {
    color: #000;
    text-decoration: none;
  }
}
</style>
