import { useState, useCallback } from 'react';
import BoardList from './BoardList';

const select = () => {
  const arr = [];
  for (let i = 0; i < 3000; i++) {
    arr.push({ no: 1 + i, title: '제목' + i, checked: false });
  }
  return arr;
};

const App3 = () => {
  const [boards, setBoards] = useState(select);
  const changeChecked = useCallback((no) => {
    const boards2 = (boards) =>
      boards.map((b) => (b.no === no ? { ...b, checked: !b.checked } : b));

    setBoards(boards2);
  }, []);
  return (
    <>
      {boards.map((e, i) => (
        <BoardList key={i} board={e} changeChecked={changeChecked} />
      ))}
    </>
  );
};

export default App3;
