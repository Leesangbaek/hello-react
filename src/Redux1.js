import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';

const Redux1 = () => {
  const [state, setState] = useState({});
  const store = createStore(
    (state) => state,
    { id: 'hong', name: '홍길동' },
    composeWithDevTools(),
  );
  return (
    <>
      <Provider store={store}>리덕스</Provider>
    </>
  );
};

export default Redux1;
