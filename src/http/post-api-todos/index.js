let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

exports.handler = arc.middleware(auth, create)

async function create(req) {
  return data.set({
    table:'todos', 
    todo: req.body
  })
}
