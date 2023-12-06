import './App.css';

import Event3 from './Event3';
import Event4 from './Event4';
import Event5 from './Event5';
import Hooks1 from './Hooks1';
// import Hooks2 from './Hooks2';
import Hooks3 from './Hooks3';
import Counter from './Counter';
import Counter2 from './Counter2';
import React, { useState } from 'react';

const App = () => {
  const [nickname, setNickname] = useState('별명');
  return (
    <>
      <Counter nickname={nickname} setNickname={setNickname} />
      <div>
        <br></br>
      </div>
      <Event3 />
      <div>
        <br></br>
      </div>
      <Event4 />
      <div>
        <br></br>
      </div>
      <Event5 />
      <Hooks1 />
      <Counter2 />
      <Hooks3 />
    </>
  );
};

export default App;
