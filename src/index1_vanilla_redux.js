import { createStore } from 'redux';
console.log('### index1_vanilla_redux.js');
/*
  # 작업 순서
    # 1 createStore(reducer 역할)
      * createStore(reducer).getState();

    # 2 Actions: store의 값을 변경
      * createStore(reducer).dispatch( {type: ""} );
  
    # 3 Subscriptions: dispatch 이후 동작
      * createStore(reducer).subscribe(function(){});

    # 4 refactoring
      * disaptch action type을 상수로 쓰는 이유는? => react에서 에러 메세지가 나온다.
*/

/* 
  # 설명 
    # STEP1: click event -> dispatch -> reducer 수행
      * createStore의 dispatch를 통해서 STEP1에서 설정한 countModifier(reducer 역할)함수를 호출한다.
    # STEP2
      * createStore함수에 설정한 countModifier 함수 호출(reducer 역할)
    # STEP3: dispatch 이후 동작
      * createStore객체에 subscribe함수에 함수를 구독하면 실행된다.(pub-sub pattern)
*/

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer 역할
const countModifier = (count = 0, action) => {
  /* 
    # STEP2
      * createStore함수에 설정한 countModifier 함수 호출(reducer 역할)
  */
  console.log('# STEP2: countModifier fn', { count, action });
  //eg) action = { type: "MINUS", count:1 }

  switch (action.type) {
    case 'ADD':
      return count + 1;
      break;
    case 'MINUS':
      return count - 1;
      break;
    default:
      return count;
      break;
  }
};

const countStore = createStore(countModifier);
const onChange = () => {
  console.log('# STEP3: onChange fn');
  number.innerText = countStore.getState();
};

/* 
  # STEP3: dispatch 이후 동작
    * createStore객체에 subscribe함수에 함수를 구독하면 실행된다.(pub-sub pattern)
*/
countStore.subscribe(onChange);

const handleAdd = () => {
  // # STEP1: click event -> dispatch -> reducer 수행
  //  * createStore의 dispatch를 통해서 STEP1에서 설정한 countModifier(reducer 역할)함수를 호출한다.
  console.log('# index1_vanilla_redux.js > handleAdd fn');
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  // # STEP1: click event -> dispatch -> reducer 수행
  //  * createStore의 dispatch를 통해서 STEP1에서 설정한 countModifier(reducer 역할)함수를 호출한다.
  console.log('# index1_vanilla_redux.js > handleMinus fn');
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

console.log(countStore.getState());
