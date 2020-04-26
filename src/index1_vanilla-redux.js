import { createStore } from "redux";

//#1.1 createStore/ redecuer
//  createStore(reducer).getState();

//#1.2 Actions: store의 값을 변경
// createStore(reducer).dispatch( {type: ""} );

//#1.3 Subscriptions: dispatch 이후 동작
// createStore(reducer).subscribe(function(){});

//#1.4 refactoring
//  disaptch action type을 상수로 쓰는 이유는? => react에서 에러 메세지가 나온다.

//reducer
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  console.log({ count, action }); //eg) action = { type: "MINUS", count:1 }

  switch (action.type) {
    case "ADD":
      return count + 1;
      break;
    case "MINUS":
      return count - 1;
      break;
    default:
      return count;
      break;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());
