import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log({state, action});
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now()}, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);

const dispatchDeleteTodo = e => {
}

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);

  })
}

store.subscribe( paintTodos );

const submit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: toDo });
}
form.addEventListener("submit", submit)