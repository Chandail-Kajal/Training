let allTodos;
window.addEventListener("load",()=>{
  // allTodos = JSON.parse(localStorage.getItem("todos")) ?? []
  // allTodos.forEach(todo=>addTodo(todo));
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json()
  })
  .then((data)=>{
    allTodos = data.map(todo=>{
      return {
        id:todo.id,
        task:todo.title,
        done:todo.completed
      }
    })
    allTodos.forEach(todo => {
      addTodo(todo)
    });
  })
  .catch((err) => {
    alert(err)
  });
})
const form = document.getElementById("todoForm")
const input = document.getElementById("todo")
const list = document.getElementById("todoList")
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const todo = {
    task:input.value,
    done:false,
    id:Date.now()
  }
  if(todo.task.length<3){
    return
  }
  addTodo(todo)
  input.value=""
  allTodos.push(todo)
  localStorage.setItem("todos",JSON.stringify(allTodos))
})

function deleteTodo(id){
  document.getElementById("li-"+id).remove()
  allTodos = allTodos.filter((todo)=>{return todo.id!=id})
  localStorage.setItem("todos",JSON.stringify(allTodos))
}

function editTodo(id){
  const newTodo = prompt("Edit todo")
  document.getElementById("span-"+id).innerText = newTodo
  //update local storage
}

function markTodo(id){
  const todoText = document.getElementById("span-"+id)
  if(document.getElementById("mark-"+id).checked){
    todoText.classList.add("done")
  } else {
    todoText.classList.remove("done")
  }
  //update local storage
}

function addTodo(todo){
  const li = document.createElement("li")
  li.id = "li-"+todo.id
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  li.innerHTML = `<li id="li-${todo.id}">
                    <input id="mark-${todo.id}" type="checkbox" ${todo.done?"checked":""} onchange="markTodo('${todo.id}')" >
                    <span id="span-${todo.id}" class="${todo.done?"done":""}">${todo.task}</span>
                    <button id="edit-${todo.id}" onclick="editTodo('${todo.id}')">Edit</button>
                    <button id="del-${todo.id}" onclick="deleteTodo('${todo.id}')">Delete</button>
                  </li>`
  list.appendChild(li)
}

