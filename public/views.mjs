import todos from '/todos.mjs'

export default {
  // renders login form
  login(state={}) {
    let err = state.error? `<span class=error>${state.error}</span>` : ''
    document.body.innerHTML = `
    ${err}
    <form action=/login method=post>
      <input type=text name=passcode placeholder="secret passcode here">
      <button type=submit>login</button>
    </form>
    `
  },

  // renders todos and binds event handlers
  todos(state={}) {
    document.body.innerHTML = todolist(state)
    let todoForm = document.getElementById('todoForm')
    let todoList = document.getElementById('todos')
    todoForm.onsubmit = create
    todoList.onclick = modify
  }
}

// todo template
function todo(state) {
  return `
  <li>
    <input type=text value="${state.todo.text}">
    <button data-action=update data-key=${state.key}>update</button>
    <button data-action=destroy data-key=${state.key}>x</button>
  </li>
  `
}

// todolist template
function todolist(todos) {
  return `
    <form method=post action=/logout>
      <button type=submit>logout</button>
    </form>
    <form id=todoForm>
      <input type=text name=todo placeholder="todo text here">
      <button type=submit>save</button>
    </form>
    <ul id=todos>
      ${todos.map(todo).join('\n')}
    </ul>
  `
}

// create handler
async function create(event) {
  event.preventDefault()
  let todoForm = document.getElementById('todoForm')
  let todoList = document.getElementById('todos')
  try {
    let text = todoForm.querySelector('input').value
    let saved = await todos.create({text})
    todoList.innerHTML += todo(saved)
  }
  catch(e) {
    console.log(e.message)
  }
}

// modify handler
async function modify(event) {
  event.preventDefault()
  let todoForm = document.getElementById('todoForm')
  let todoList = document.getElementById('todos')
  let action = event.target.dataset.action
  let key = event.target.dataset.key
  let el = event.target.parentNode
  try {
    if (action === 'destroy') {
      await todos.destroy(key)
      el.remove()
    }
    if (action === 'update') {
      let text = el.querySelector('input').value
      await todos.update({key, text})
    }
  }
  catch(e) {
    console.log(e.message)
  }
}
