@app
arcspa

@http
post /logout # logout
post /login  # login

get /api/todos          # get todos 
get /api/todos/:todo    # get todo
post /api/todos         # create todo
patch /api/todos/:todo  # update todo
delete /api/todos/:todo # destroy todo

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
