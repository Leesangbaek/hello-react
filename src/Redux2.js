import { createStore } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import Redux3 from './Redux3';

const Redux2 = () => {
  const [state, setState] = useState({});
  //리듀서
  const reducer = (state, action) => {
    const { type, command } = action;
    switch (type) {
      case 'INCREASE': {
        return {
          ...state,
          command: command,
        };
      }
      default:
        return state;
    }
  };
  const store = createStore(
    reducer,
    { id: 'hong', name: '홍길동' },
    composeWithDevTools(),
  );

  return (
    <>
      <Provider store={store}>
        리덕스
        <Redux3 />
      </Provider>
    </>
  );
};
export default Redux2;
