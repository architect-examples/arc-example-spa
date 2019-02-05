let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

async function destroy(req) {
  let key = req.params.todo
  await data.destroy({table:'todos', key})
  return {statusCode: 201, body: '{}'}
}

exports.handler = arc.middleware(auth, destroy)
