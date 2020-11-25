const loadData = function() {
  const data = [
    {
      id: '001',
      name: 'iphone11',
      price: 4300,
      inventory: 10,
    },
    {
      id: '002',
      name: 'iphone12',
      price: 8000,
      inventory: 3,
    },
    {
      id: '003',
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