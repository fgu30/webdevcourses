const defaultState = {
  list: ['task 1', 'task 2']
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'LOAD_DATA':
      return state
    case 'PUT_DATA':
      return {
        list: [
          ...state.list,
          action.task
        ]
      }
    default:
      return state
  }
}