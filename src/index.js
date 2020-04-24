import { createStore } from "redux";

//#1.1 createStore/ redecuer
//  createStore(reducer).getState();

//#1.2 Actions
// dispatch

//reducer
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

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());