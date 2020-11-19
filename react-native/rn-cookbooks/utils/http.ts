interface Options {
  method: string
  url: string
}

const http = (options: Options) => {
  return fetch(options.url, {
    method: options.method,
  })
  .then(response => response.json())
  .then(result => {
    return result
  })
}

export default http
