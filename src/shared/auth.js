let arc = require('@architect/functions')

module.exports = async function auth (req) {
  if (!req.session.loggedIn) {
    return {
      code: 403,
      json: { error: 'not authorized! please login' }
    }
  }
}
