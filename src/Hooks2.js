import React, { useState, useEffect } from 'react';
const Hooks2 = () => {
  let [today, setToday] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      const nextToday = { ...today, today: new Date() };
      setToday(new Date());
      console.log(nextToday);
    }, 1000);
  }, []);
  return <>{today.toString()}</>;
};
export default Hooks2;
