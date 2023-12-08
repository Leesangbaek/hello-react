import Depth1 from './Depth1';
import './AppRedux.css';
import { useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const AppRedux = () => {
  //   const [number, setnumber] = useState(1);
  //   const increase = () => {
  //     setnumber(number + 1);
  //   };
  // 스토어 생성시 반드시 리듀서함수를 주입
  function reducer(state, action) {
    if (state === undefined) {
      return { number: 1 };
    }
    // 불변성
    const state2 = { ...state };
    if (action.type === 'INCREASE') {
      state2.number++;
    }
    return state2;
  }
  // 스토어 생성
  const store = createStore(reducer);
  return (
    <>
      <h1>AppRedux</h1>
      <Provider store={store}>
        <Depth1 />
      </Provider>
    </>
  );
};

export default AppRedux;
