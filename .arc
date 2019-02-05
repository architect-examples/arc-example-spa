@app
arcspa

@http
get /
post /logout # logout
post /login  # login

get /api/todos          # get todos 
get /api/todos/:todo    # get todo
post /api/todos         # create todo
patch /api/todos/:todo  # update todo
delete /api/todos/:todo # destroy todo

@static
staging prox-bukkit-stage
production prox-bukkit-prod

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
