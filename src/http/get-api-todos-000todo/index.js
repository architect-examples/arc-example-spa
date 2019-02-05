let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function read(req) {
  let key = req.params.todo
  let result = await data.get({table:'todos', key})
  return {
    body: JSON.stringify(result)
  }
}

exports.handler = arc.middleware(auth, read)
