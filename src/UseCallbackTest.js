import { useState, useCallback } from 'react';

const UseCallbackTest = () => {
  const [number, setNumber] = useState(0);

  const increase = useCallback(() => {
    setNumber((num) => num + 1);
  }, []);
  return (
    <>
      <div>{number}</div>
      <div>
        <button onClick={increase}>증가</button>
      </div>
    </>
  );
};
export default UseCallbackTest;
