import mutations from "../../src/store/mutations";
import * as types from "../../src/store/mutationTypes";

describe("Mutations test", () => {
  it("Dont update state in init app", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    mutations[types.INIT_STORAGE](state);
    expect(state.tasks).toEqual([]);
  });
  it("Update tasks array on init app from localstorage", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    const data = [
      {
        id: 1,
        name: "Lorem Ipsum"
      },
      {
        id: 2,
        name: "Dolore Ipsum"
      }
    ];
    mutations[types.INIT_STORAGE_FROM_LOCALSTORAGE](state, data);
    expect(state.tasks).toEqual(data);
    expect(state.error).toEqual(null);
  });
  it("Update tasks array on init app from template", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    const data = [
      {
        id: 1,
        name: "Lorem Ipsum"
      },
      {
        id: 2,
        name: "Dolore Ipsum"
      }
    ];
    mutations[types.INIT_STORAGE_FROM_TEMPLATE](state, data);
    expect(state.tasks).toEqual(data);
    expect(state.error).toEqual(null);
  });
  it("Set error information when got error on init app", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    const err = "Some error here";
    mutations[types.INIT_STORAGE_ERROR](state, err);
    expect(state.error).toEqual(err);
    expect(state.tasks).toEqual([]);
  });
  it("Dont update state on update task", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    mutations[types.UPDATE_TASK](state);
    expect(state.tasks).toEqual([]);
  });
  it("Set current task id", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    const taskId = 5;
    mutations[types.GET_CURRENT_TASK](state, taskId);
    expect(state.currentTaskId).toEqual(taskId);
  });
  it("Update tasks", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    const initialTasks = [{ id: 2, name: "Task 2" }, { id: 4, name: "Task 4" }];
    const newTasks = [{ id: 2, name: "Task 2" }, { id: 4, name: "Task 44" }];
    mutations[types.INIT_STORAGE_FROM_LOCALSTORAGE](state, initialTasks);
    expect(state.tasks).toEqual(initialTasks);
    mutations[types.UPDATE_TASK_SUCCESS](state, newTasks);
    expect(state.tasks).toEqual(newTasks);
    expect(state.error).toEqual(null);
  });
  it("Set error information when get error on update", () => {
    const state = {
      tasks: [],
      error: null,
      currentTaskId: null
    };
    const initialTasks = [{ id: 2, name: "Task 2" }, { id: 4, name: "Task 4" }];
    const errMessage = "Error is Here";
    mutations[types.INIT_STORAGE_FROM_LOCALSTORAGE](state, initialTasks);
    expect(state.tasks).toEqual(initialTasks);
    mutations[types.UPDATE_TASK_FAILED](state, errMessage);
    expect(state.tasks).toEqual(initialTasks);
    expect(state.error).toEqual(errMessage);
  });
});
