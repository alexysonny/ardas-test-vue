<template>
  <div
    :class="{ heading__priority: isHighPriority }"
    contenteditable="isContentEditable"
    @click="switchConentEditable"
    @blur="missClickHandler($event)"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    editable: {
      type: Boolean,
      default: false
    },
    highPriority: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isContentEditable: false
    };
  },
  computed: {
    isHighPriority() {
      return this.highPriority;
    }
  },
  methods: {
    missClickHandler(event) {
      const newStr = event.target.innerText;
      console.log(newStr);
      if (newStr !== this.name) {
        this.$emit("missClick", newStr);
      }
    },
    switchConentEditable() {
      this.isContentEditable = this.editable ? !this.isContentEditable : false;
    }
  }
};
</script>

<style lang="scss">
.heading {
  &__priority {
    font-weight: 700;
    color: red;
  }
}
</style>
