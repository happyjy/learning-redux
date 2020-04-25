import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";


function ToDo({ text, id, onDeleteBtnClick }) {
  console.log("### ToDo > ToDo: ", { text, id, onDeleteBtnClick })
  return (
    <li key={id}>
      {text} <button onClick={onDeleteBtnClick}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps){
  console.log("### ToDo > mapDispatchToProps: ", {dispatch, ownProps});
  return {
    onDeleteBtnClick: () => dispatch(actionCreators.deleteToDo(parseInt(ownProps.id)))
  };
}

export default connect(null, mapDispatchToProps)(ToDo);