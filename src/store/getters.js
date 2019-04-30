export default {
  getActiveTasks: state => {
    return state.tasks.length
      ? state.tasks.filter(task => task.obj_status === "active")
      : [];
  },
  getCurrentTask: state => {
    const { tasks, currentTaskId } = state;
    return currentTaskId !== -1 ? tasks[currentTaskId] : null;
  }
};
