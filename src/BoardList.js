import React from 'react';

const BoardList = ({ board, changeChecked }) => {
  const { no, title, checked } = board;
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={checked ? 'checked' : ''}
          onChange={() => changeChecked(no)}
        />
      </div>
      {no} {title}
    </>
  );
};

export default React.memo(BoardList); //memoization
