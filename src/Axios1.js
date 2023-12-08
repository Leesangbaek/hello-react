import React, { useState } from 'react';
import axios from 'axios';

const Axios1 = () => {
  const [data, setData] = useState(null);
  const getApi = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setData(res.data);
    });
  };
  return (
    <>
      <button onClick={getApi}>불러오기</button>
      <div>{data && JSON.stringify(data)}</div>
    </>
  );
};

export default Axios1;
