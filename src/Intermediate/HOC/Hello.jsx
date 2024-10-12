import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Income {props.income}</h2>
    </div>
  );
}

export default Hello