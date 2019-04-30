export default {
  getActiveTasks: state => {
    return state.tasks.length
      ? state.tasks.filter(task => task.obj_status === "active")
      : [];
  },
  getCurrentTask: state => {
    const { tasks, currentTaskId } = state;
    let val = null;
    if (currentTaskId !== -1) {
      val = tasks[currentTaskId];
    }
    return val;
  }
};
