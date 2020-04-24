import React from "react";
import ReactDOM from"react-dom";
import App from "./component/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

/**
 * 
 * 1. Provider(react-redux)에 생성한 "stroe"를 설정함으로 store가 변경될때 App에서 store를 사용할 수 있다. 
 * 2. connect 
 *  - component와 store를 연결해주는 react-redux 객체
 * 
 */









 /* 
 To use connect(), you need to define a special function called mapStateToProps that describes how to transform the current Redux store state into the props you want to pass to a presentational component you are wrapping. 
 
 */