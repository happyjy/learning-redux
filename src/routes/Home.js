import React, { useState }from "react";
import { connect } from "react-redux";

function Home({ toDos, abc }){
  console.log("### Home component: ", toDos, abc)
  const [text, setText] = useState("");
  function onChange(e){
    setText(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    setText("");
    console.log("### onSubmit: ", text);
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
  console.log("### mapStateToProps", {state, ownProps});
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);

