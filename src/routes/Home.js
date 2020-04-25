import React, { useState }from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo, dispatch }){
  console.log("### Home component: ", {toDos, addToDo, dispatch});
  const [text, setText] = useState("");

  function onChange(e){
    setText(e.target.value);
  }

  function onSubmit(e){
    console.log("### onSubmit: ", text);
    e.preventDefault();
    setText("");
    
    // #dispatch 하는 방법 
    // dispatch(actionCreators.addTodo(text));
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="input" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form> 
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  )
}

//connect를 사용해서 Home으로 보내주는 props에 추가 될 수 있도록 허용 
//mapStateToProps return에 보내주는 값은 Home props로 받을 수 있다. 
function mapStateToProps(state, ownProps){
  console.log("### mapStateToProps: ", {state, ownProps});
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps){
  console.log("### mapDispatchToProps: ", {dispatch, ownProps});
  return { 
    dispatch,
    addToDo: text => dispatch(actionCreators.addToDo(text)) //disaptch에 action을 넣어준 것이다.
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

