export default {

  // create a todo
  async create({text}) {
    let created = new Date(Date.now()).toISOString()
    let todo = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text, created, done:false})
    }) 
    return await todo.json()
  },

  // read one or many todos
  async read(key) {
    let url = key? `/api/todos/${key}` : '/api/todos'
    let todos = await fetch(url)
    return await todos.json()
  },

  // update a todo
  async update({key, text}) {
    let modified = new Date(Date.now()).toISOString()
    let todo = await fetch(`/api/todos/${key}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text, modified})
    }) 
    return await todo.json()
  },

  // destroy a todo by key
  async destroy(key) {
    let todo = await fetch(`/api/todos/${key}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    return await todo.json()
  },
}
