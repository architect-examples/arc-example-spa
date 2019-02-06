import todos from '/todos.mjs'

export default {

  // renders login form which does a normal http post to /login
  login(state={}) {
    let err = state.error? `<span class=error>${state.error}</span>` : ''
    document.body.innerHTML = loginForm(err)
  },

  // renders todos and binds event handler
  todos(state={}) {
    // update the dom
    document.body.innerHTML = todolist(state)
    // bind the event handler
    let todoForm = document.getElementById('todoForm')
    let todoList = document.getElementById('todos')
    todoForm.onsubmit = handler
    todoList.onclick = handler
  }
}

// login form template
function loginForm(err) {
  return `
  ${err}
  <form action=/login method=post>
    <input type=text name=passcode placeholder="secret passcode here">
    <button type=submit>login</button>
  </form>
  `
}

// todo template (returns a plain dom string)
function todo(state) {
  return `
  <li>
    <input type=text value="${state.todo.text}">
    <button data-action=update data-key=${state.key}>update</button>
    <button data-action=destroy data-key=${state.key}>x</button>
  </li>
  `
}

// todolist template (returns a plain dom string)
function todolist(todos) {
  return `
    <form method=post action=/logout>
      <button type=submit>logout</button>
    </form>
    <form id=todoForm data-action=create>
      <input type=text placeholder="todo text here">
      <button type=submit>save</button>
    </form>
    <ul id=todos>
      ${todos.map(todo).join('\n')}
    </ul>
  `
}

// event handler (looks at data-action attribute)
async function handler(event) {
  event.preventDefault()
  let todoForm = document.getElementById('todoForm')
  let todoList = document.getElementById('todos')
  let action = event.target.dataset.action
  try {
    if (action === 'create') {
      let input = event.target.querySelector('input')
      let text = input.value
      input.value = ''
      let saved = await todos.create({text})
      todoList.innerHTML += todo(saved)
    }
    if (action === 'destroy') {
      let key = event.target.dataset.key
      let el = event.target.parentNode
      await todos.destroy(key)
      el.remove()
    }
    if (action === 'update') {
      let key = event.target.dataset.key
      let el = event.target.parentNode
      let text = el.querySelector('input').value
      await todos.update({key, text})
    }
  }
  catch(e) {
    console.log(e.message)
  }
}
