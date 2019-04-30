import * as types from "./mutationTypes";
import axios from "axios";

export default {
  initApp({ commit }) {
    commit(types.INIT_STORAGE);
    const localStorageData = localStorage.getItem("tasksList");
    try {
      if (localStorageData) {
        commit(
          types.INIT_STORAGE_FROM_LOCALSTORAGE,
          JSON.parse(localStorageData)
        );
      } else {
        const templateData = require("./constants/tasks");
        localStorage.setItem("tasksList", JSON.stringify(templateData.tasks));
        commit(types.INIT_STORAGE_FROM_TEMPLATE, templateData.tasks);
      }
    } catch (e) {
      console.error("error during update localstorage data", e);
      commit(types.INIT_STORAGE_ERROR, e);
    }
  },
  getCurrentTaskId({ commit, state }, taskId) {
    const currentTask = state.tasks.findIndex(task => task.id == taskId);
    commit(types.GET_CURRENT_TASK, currentTask);
  },
  updateTask({ commit, state }, data) {
    commit(types.UPDATE_TASK);
    try {
      const { id } = data;
      const newTasks = state.tasks.map(task => {
        return task.id == id ? data : task;
      });
      axios
        .put("http://localhost:4000/update", data)
        .then(resp => {
          console.log("put response ok: ", resp);
        })
        .catch(err => {
          console.log("put response error: ", err);
        });
      commit(types.UPDATE_TASK_SUCCESS, newTasks);
      localStorage.setItem("tasksList", JSON.stringify(newTasks));
    } catch (error) {
      commit(types.UPDATE_TASK_FAILED, error);
    }
  }
};
