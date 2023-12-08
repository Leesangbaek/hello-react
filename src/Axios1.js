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
      <div>
        <ul>{data && data.map((e) => <li key={e.id}>{e.title}</li>)}</ul>
      </div>
    </>
  );
};

export default Axios1;
