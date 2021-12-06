const initialState = {
  task: "",
  isDel: false,
};

const Task = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET":
      return { task, isDel };

    case "POST":
      return { task, isDel: false };

    case "PUT":
      const { task, isDel } = payload;
      return { task, isDel };

    case "DELETE":
      return { task, isDel: true };

    default:
      return state;
  }
};

export default Task;

export const getTasks = (data) => {
  return {
    type: "GET",
    payload: data,
  };
};

export const addTask = (data) => {
  return {
    type: "POST",
    payload: data,
  };
};
export const editTask = (data) => {
  return {
    type: "PUT",
    payload: data,
  };
};

export const delTask = (data) => {
  return {
    type: "DELETE",
    payload: data,
  };
};
