export default ({dispatch, getState}) => next => action => {
  console.log('m2')
  const ac = {
    type: 'hello'
  }
  next(ac)
}