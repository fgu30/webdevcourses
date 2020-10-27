const defaultState = {
  count: 0
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'add': 
      return {
        count: action.data
      }
    default:
      return state
  }
}

export default reducer