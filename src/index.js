import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

/**
 *
 * 1. Provider(react-redux)에 생성한 "store"를 설정함으로 store가 변경될때 App에서 store를 사용할 수 있다.
 *  - Provider 설정 위치: store를 사요알 component에 컴포넌트 형식으로 감싸면 된다.
 *  - [Study list]태그를 감싸는 형태로 어떻게 하위 컴포넌트에 store를 사용하는건지 확인해보자!
 *
 * 2. connect fucntion의 첫번째 arguments
 *  - 공식문서: https://react-redux.js.org/using-react-redux/connect-mapstate
 *  - component와 store를 연결해주는 react-redux function
 *  - 아래와 같이 써주게 되면 Home component에 mapStateToProps 함수에서 반환한 객체를 사용 할 수 있다.
 *      connect(mapStateToProps)(Home);
 *    store.getState()라고 보면 되겠다.
 *
 * 3. connect function의 두번째 arguments
 *  - 공식문서: https://react-redux.js.org/using-react-redux/connect-mapdispatch
 *  - store.dispatch()를 구현하기 위한 것
 *  - 아래와 같이 mapDispatchToProps function을 작성해 connect 두번째 파라미터로 넘기면 component에 dispatch를 사용해 store에 있는 action을 사용해서 store state를 변경합니다.
 *    connect(mapStateToProps, mapDispatchToProps)(Home);
 *
 * 4. connect 정리 !
 *  - component에서 comnnect를 사용해서 store.js에 있는 store에 대해서 dispatch, action Creators를 처리 할 필요가 없다.
 *  - connect에 두개의 function으로 state와 dispatch 객체들을 컴포넌트 props로 넘겨 사용할 수 있게 됐다.
 *
 * 5. delete  구현!
 *  - ToDo component에 del btn이 있다!
 *    이 버튼에 delete dispatch하는데 필요한 정보 3가지(아래 참고)를 활용해 mapDispatchToProps를 만들어 button click event에서 사용하도록 한다.
 *  - dispatch하는데 필요한 정보 3가지
 *    : store,
 *    : actionCreator,
 *    : redux dispatch(connect의 두번째 파라미터 function의 첫번째 파라미터 dispatch === mapDispatchToProps function의 첫번째 파라미터)을 사용해
 *
 * 6. Detail Page
 *  - Home에서 todo list를 작성하고 Link를 통해서 Detail로 넘어길떼
 *    Detail component 화면로드 시 mapStateToProps에서 state는 현재 입력한 toDos 배열이다.
    - mapStateToProps 첫, 두번째 파람 정보
      : state = store.getState();
      : ownProps - Link(react-router-dome)의 정보( { history, location, match, staticContext })
    - Component 구조
      <Provider> App </Provider>
      ㄴ App:
      <Router>
        <Route> Home </Route>
        <Route> Detail </Route>
      </Router>

 * 7. react-redux에서 사용하는 다음 두가지는(mapStateToProps, mapDispatchToProps)
      vanilla redux에서는 아래와 같은 역학을 합니다.
    - mapStateToProps: store.getState()
    - mapDispatchToProps: store. dispatch()
 * redux, action, storeㄴ
 */

/*
 To use connect(), you need to define a special function called mapStateToProps that describes how to transform the current Redux store state into the props you want to pass to a presentational component you are wrapping.

 */
