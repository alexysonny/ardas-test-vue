import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutationTypes";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    error: null,
    currentTaskId: null
  },
  getters: {
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
  },
  mutations: {
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
  },
  actions: {
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
  }
});
