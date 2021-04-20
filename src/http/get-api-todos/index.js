let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, read)

async function read (req) {
  return data.get({ table: 'todos' })
}
