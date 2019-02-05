let arc = require('@architect/functions')

exports.handler = async function login(req) {
  let session = await arc.http.session.read(req)
  session.loggedIn = req.body.passcode === 'secret'
  let cookie = await arc.http.session.write(session)
  return {
    cookie,
    status: 302,
    location: '/',
  }
}
