import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutationTypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    error: null
  },
  getters: {
    getActiveTasks: state => {
      return state.tasks.length
        ? state.tasks.filter(task => task.obj_status === "active")
        : [];
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
    }
  }
});
