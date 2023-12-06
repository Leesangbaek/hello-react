import React, { useState, useMemo, useCallback, useRef } from 'react';
const Hooks3 = () => {
  let btn = useRef(null);
  const click = () => {
    console.log(btn);
    btn.current.click();
  };
  let [list, setList] = useState([]);
  let [number, setNumber] = useState('');
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  const insert = useCallback(
    (e) => {
      console.log(document.querySelector('#number').value);
      setList([...list, parseInt(number)]);
    },
    [list, number],
  );
  const sum = (list) => {
    console.log('합계 계산');
    let sum = 0;
    list.forEach((element) => {
      sum += element;
    });
    return sum;
  };

  // 합계계산이 계속나오는걸 등록할 때만 나오게 하는 코드
  const s = useMemo(() => sum(list), [list]);

  return (
    <>
      <input type="text" value={number} id="number" onChange={onChange} />
      <button onClick={insert} ref={btn}>
        등록
      </button>
      <button onClick={click}>새로운 버튼</button>
      <ul>
        {list.map((v, idx) => (
          <li key={idx}>{v}</li>
        ))}
      </ul>
      <div>합계:{sum(list)}</div>
    </>
  );
};
export default Hooks3;
