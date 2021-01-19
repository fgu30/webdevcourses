const removeDataAction = (index) => {
  return {
    type: "DELETE_DATA",
    index,
  };
};
const putDataAction = (task) => {
  return {
    type: "PUT_DATA",
    task,
  };
};

const setDataAction = (data) => {
  return {
    type: "SET_DATA",
    data,
  };
};

function loadDataAction() {
  return (dispatch) => {
    fetch("/position.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDataAction(data.result));
      });
  };
}

export { removeDataAction, putDataAction, setDataAction, loadDataAction };
