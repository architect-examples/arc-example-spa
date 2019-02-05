let arc = require('@architect/functions')

module.exports = async function auth(req) {
  let session = await arc.http.session.read(req)
  if (!session.loggedIn) {
    return {
      code: 403,
      body: JSON.stringify({error:'not authorized! please login'})
    }
  }
}
