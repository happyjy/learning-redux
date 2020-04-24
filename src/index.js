import { createStore } from "redux";

//#1.1 createStore/ redecuer
//  createStore(reducer).getState();

//#1.2 Actions: store의 값을 변경
// createStore(reducer).dispatch( {type: ""} );

//#1.3 Subscriptions: dispatch 이후 동작
// createStore(reducer).subscribe(function(){});

//reducer
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log({count, action}); //eg) action = { type: "MINUS", count:1 }
  
  switch (action.type) {
    case "ADD":
      return count + 1;
      break;
    case "MINUS":
      return count -1;
      break;
    default:
      return count;
      break;
  }
}

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
}

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
}


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());