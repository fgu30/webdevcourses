const loadData = function() {
  const data = [
    {
      name: 'iphone11',
      price: 4300,
      inventory: 10,
    },
    {
      name: 'iphone12',
      price: 8000,
      inventory: 3,
    },
    {
      name: 'iphone13',
      price: 10000,
      inventory: 2,
    }
  ]
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 500)
  })
}

export default loadData