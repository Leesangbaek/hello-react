import React, { useState, useRef, useMemo } from 'react';

const UseMemoTest = () => {
  const [number, setNumber] = useState(0); //초기화
  const [name, setName] = useState('홍길동'); //초기화
  const inputName = useRef(null);
  const increase = () => {
    setName('김길동');
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  console.log('컴포넌트 렌더링됨');
  const val = useMemo(() => {
    console.log('렌더링됨' + new Date());
    return number * number;
  }, [number]);

  return (
    <>
      <div>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
        <input type="text" ref={inputName}></input>
        <button onClick={() => setName(inputName.current.value)}>
          이름변경
        </button>
      </div>
      <div>
        {number} {name} {val}
      </div>
    </>
  );
};

export default UseMemoTest;
