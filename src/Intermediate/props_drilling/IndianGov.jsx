import React from 'react'
import StateGov from './StateGov';

const IndianGov = () => {
    const money = 1000;
    const adhar = 500;
  return (
    <div>
      <h1>This is IndianGov Component</h1>
      <StateGov money={money} adhar={adhar} />
    </div>
  );
}

export default IndianGov