let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function create(req) {
  let todo = await data.set({
    table:'todos', 
    todo: req.body
  })
  return {
    statusCode: 201,
    body: JSON.stringify(todo)
  }
}

exports.handler = arc.middleware(auth, create)
