// toy http client with four methods:
// http.get({url})
// http.post({url, body})
// http.patch({url, body})
// http.delete({url})
async function write(method, {url, body}) {
  let todo = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }) 
  return await todo.json()
}

let http = {
  async get({url}) {
    let result = await fetch(url)
    return await result.json()
  }
}

http.post = write.bind({}, 'POST')
http.patch = write.bind({}, 'PATCH')
http.delete = write.bind({}, 'DELETE')

export default http
