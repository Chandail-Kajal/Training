const form = document.getElementById("todoForm");
const list = document.getElementById("todoList")
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const task = document.getElementById("todo").value
  const priority = document.getElementById("priority").value
  const todo = {task, priority, id: Date.now()};    
  if(todo.task.length<3){
    return
  }
  addTodo(todo)
  document.getElementById("todo").value= ""
}

function addTodo(todo){
    const listItem = document.createElement("li") //<li></li>
    listItem.innerText = todo.task //<li>asdasda</li>
    const editBtn = document.createElement("button")//<button></button>
    editBtn.innerText = "Edit"
    editBtn.addEventListener('click',editTodo)
    const delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    delBtn.addEventListener("click",deleteTodo)
    listItem.appendChild(editBtn)
    listItem.appendChild(delBtn)
    list.appendChild(listItem)
}

function editTodo(e){
    //implement this function and complete edit functionality
}

function deleteTodo(e){
    e.target.parentElement.remove()
}