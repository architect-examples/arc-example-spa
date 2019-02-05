let arc = require('@architect/functions')

exports.handler = async function logout(req) {
  let session = await arc.http.session.read(req)
  session.loggedIn = false
  let cookie = await arc.http.session.write(session)
  return {
    cookie,
    status: 302,
    location: '/',
  }
}
