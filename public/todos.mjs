import http from '/http.mjs'

export default {

  // create a todo
  async create({text}) {
    let url = '/api/todos'
    let created = new Date(Date.now()).toISOString()
    let body = {text, created, done:false}
    return await http.post({url, body})
  },

  // read one or many todos
  async read(key) {
    let url = key? `/api/todos/${key}` : '/api/todos'
    return await http.get({url})
  },

  // update a todo
  async update({key, text}) {
    let url = '/api/todos/' + key
    let modified = new Date(Date.now()).toISOString()
    let body = {text, modified}
    return await http.patch({url, body})
  },

  // destroy a todo by key
  async destroy(key) {
    let url = `/api/todos/${key}`
    return await http.delete({url})
  },
}
