let arc = require('@architect/functions')

exports.handler = arc.http.async(login)

async function login(req) {
  let loggedIn = req.body.passcode === 'secret'
  return {
    session: { loggedIn },
    location: '/',
  }
}
