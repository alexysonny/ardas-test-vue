import getters from "./../../src/store/getters";

describe("Getters test", () => {
  it("Returns empty array when tasks list is empty.", () => {
    const state = {
      tasks: []
    };
    expect(getters.getActiveTasks(state)).toEqual([]);
  });
  it("Returns active tasks when tasks is here.", () => {
    const state = {
      tasks: [
        {
          id: 1,
          name: "Task 1",
          obj_status: "active"
        },
        {
          id: 2,
          name: "Task 2",
          obj_status: "trashed"
        },
        {
          id: 3,
          name: "Task 3",
          obj_status: "active"
        }
      ]
    };
    expect(getters.getActiveTasks(state).length).toBe(2);
  });
  it("Returns null when task id is '-1'", () => {
    const state = {
      tasks: [
        {
          id: 1,
          name: "Task 1",
          obj_status: "active"
        },
        {
          id: 2,
          name: "Task 2",
          obj_status: "trashed"
        },
        {
          id: 3,
          name: "Task 3",
          obj_status: "active"
        }
      ],
      currentTaskId: -1
    };
    expect(getters.getCurrentTask(state)).toEqual(null);
  });
  it("Returns task object when task id is not equal '-1'", () => {
    const state = {
      tasks: [
        {
          id: 1,
          name: "Task 1",
          obj_status: "active"
        },
        {
          id: 2,
          name: "Task 2",
          obj_status: "trashed"
        },
        {
          id: 3,
          name: "Task 3",
          obj_status: "active"
        }
      ],
      currentTaskId: 2
    };
    expect(getters.getCurrentTask(state)).toEqual(state.tasks[2]);
  });
});
