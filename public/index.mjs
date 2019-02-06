import todos from '/todos.mjs'
import views from '/views.mjs'

async function renderTodos() {
  let result = await todos.read()
  let render = result.error? views.login : views.todos
  await render(result)
}

// first run
renderTodos()
