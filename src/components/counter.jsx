/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import Controls from './controls';

function Counter(props) {
  const count = useSelector((store) => store.count);
  return (
    <div>
      Current Count: { count }
      <Controls />
    </div>
  );
}

export default Counter;
