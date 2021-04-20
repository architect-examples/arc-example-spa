let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, update)

async function update (req) {
  return data.set({
    table: 'todos', 
    key: req.params.todo,
    todo: req.body
  })
}
