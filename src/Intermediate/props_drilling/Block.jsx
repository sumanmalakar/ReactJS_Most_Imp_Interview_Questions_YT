import React from 'react'
import Janta from './Janta';

const Block = ({money}) => {
  return (
    <div>
      <h1>This is Block component </h1>
      <Janta money={money} />
    </div>
  );
}

export default Block