export default ({dispatch, getState}) => (next) => (action) => {
  console.log('m1')
  next(action)
}