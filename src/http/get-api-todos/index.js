let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function read(req) {
  let todos = await data.get({table:'todos'})
  return {
    body: JSON.stringify(todos)
  }
}

exports.handler = arc.middleware(auth, read)
