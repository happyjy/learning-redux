import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../component/ToDo';

function Home({ toDos, addToDo, dispatch }) {
  console.log('### Home.js > component: ', { toDos, addToDo, dispatch });
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    console.log('### Home.js > onSubmit: ', text);
    e.preventDefault();
    setText('');

    console.log(dispatch);
    /* 
      # dispatch 하는 방법
        * addToDo = (text) => dispatch(actionCreators.addToDo(text))
    */
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="input" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      {/* <ul>{toDos.map( toDo => <ToDo key={toDo.id} text={toDo.text} id={toDo.id}/>) }</ul> */}
      {/* <ul>{JSON.stringify(toDos)}</ul> */}
    </>
  );
}

/* 
  # connect hoc를 통해서 할 수 있는 것?
    * Home으로 보내주는 props에 추가 될 수 있도록 허용
    * 그래서 "mapStateToProps", "mapDispatchToProps" 함수 return 값은 Home 컴포넌트(connect hoc로 설정한 commponent)의 props로 받을 수 있다.
*/
function mapStateToProps(state, ownProps) {
  console.log('### Home > mapStateToProps: ', { state, ownProps });
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('### Home > mapDispatchToProps: ', { dispatch, ownProps });
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)), //# disaptch에 action을 넣어준 것이다.
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
