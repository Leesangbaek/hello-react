import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
const Redux3 = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'INCREASE',
      command: 'INSERT',
    });
  }, [dispatch]);
};
export default Redux3;
