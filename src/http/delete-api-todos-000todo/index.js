let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, destroy)

async function destroy (req) {
  await data.destroy({
    table: 'todos', 
    key: req.params.todo
  })
  return {}
}
