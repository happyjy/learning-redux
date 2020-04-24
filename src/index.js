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
 * 1. Provider(react-redux)에 생성한 "stroe"를 설정함으로 App에서 store를 사용할 수 있다. 
 * 
 */