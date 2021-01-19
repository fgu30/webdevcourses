const defaultState = {
  list: ["task1"],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        list: [...state.list, ...action.data],
      };
    case "LOAD_DATA":
      return state;
    case "PUT_DATA":
      return {
        ...state,
        list: [...state.list, action.task],
      };
    case "DELETE_DATA":
      let newList = state.list.filter((value, index) => {
        return index !== action.index;
      });
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};
