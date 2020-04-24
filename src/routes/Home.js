import React, { useState }from "react";

function Home(){
  const [text, setText] = useState("");
  function onChange(e){
    setText(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    console.log("### onSubmit: ", text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="input" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  )
}

export default Home;

