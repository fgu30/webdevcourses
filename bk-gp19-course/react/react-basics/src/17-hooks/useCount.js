const useCount = (value) => {
  let count = value

  const add = (num) => {
    count += num
    console.log(count)
    return count
  }

  const minus = (num) => {
    count -= num
    return count
  }

  return [count, add, minus]
}

export default useCount