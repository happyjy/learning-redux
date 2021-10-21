import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

function ToDo({ text, id, onDeleteBtnClick }) {
  console.log('### ToDo.js ', { text, id, onDeleteBtnClick });
  return (
    <li key={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDeleteBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('### ToDo.js > mapDispatchToProps: ', { dispatch, ownProps });
  return {
    onDeleteBtnClick: () =>
      dispatch(actionCreators.deleteToDo(parseInt(ownProps.id))),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
