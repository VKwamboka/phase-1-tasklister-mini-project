document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const todo = document.getElementById('new-task-description').value
    buildTodo(todo)
    form.reset()
  })
  
});

function buildTodo (todo){
  let list =document.createElement('li')
  list.textContent = todo
  let tasks = document.getElementById('tasks')

  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'X'
  
  list.appendChild(btn)
  tasks.appendChild(list)

}

function handleDelete(event){
  event.target.parentNode.remove()
}
