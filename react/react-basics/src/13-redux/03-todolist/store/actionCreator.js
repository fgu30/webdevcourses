const removeAction = (index) => {
  return {
    type: 'REMOVE_DATA',
    index
  }
}

const putdataAction = task => {
  return {
    type: 'PUT_DATA',
    task
  }
}

const setdataAction = data => {
  return {
    type: 'SET_DATA',
    data
  }
}

const loaddataAction = () => {
  return dispatch => {
    fetch('/position.json')
      .then(response => response.json())
      .then(result => {
        dispatch(setdataAction(result.result))
      })
  }
}

export {
  removeAction,
  putdataAction,
  loaddataAction,
  setdataAction
}