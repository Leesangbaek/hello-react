import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NaverAPI = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await axios.get('/v1/search/book.json', {
      params: {
        query: '리액트',
      },
      headers: {
        'X-Naver-Client-Id': 'vVs1sH2FqlYrKaMNEi4k',
        'X-Naver-Client-Secret': 'TtIxthbisw',
      },
    });
    console.log('res', res['data']);
    setData(res['data']);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <ul>
          {data && data.items.map((e, i) => <li key={i}>{e['title']}</li>)}
        </ul>
      </div>
    </>
  );
};

export default NaverAPI;
