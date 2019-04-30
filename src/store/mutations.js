import * as types from "./mutationTypes";

export default {
  [types.INIT_STORAGE](state) {
    state.error = null;
    return state;
  },
  [types.INIT_STORAGE_FROM_TEMPLATE](state, data) {
    state.tasks = data;
    state.error = null;
    return state;
  },
  [types.INIT_STORAGE_FROM_LOCALSTORAGE](state, data) {
    state.tasks = data;
    state.error = null;
    return state;
  },
  [types.INIT_STORAGE_ERROR](state, err) {
    state.tasks = [];
    state.error = err;
    return state;
  },
  [types.GET_CURRENT_TASK](state, taskId) {
    state.currentTaskId = taskId;
    return state;
  },
  [types.UPDATE_TASK](state) {
    return state;
  },
  [types.UPDATE_TASK_SUCCESS](state, data) {
    state.tasks = data;
    return state;
  },
  [types.UPDATE_TASK_FAILED](state, error) {
    state.error = error;
    return state;
  }
};
