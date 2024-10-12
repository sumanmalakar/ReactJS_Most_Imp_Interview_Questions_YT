import React, { useContext } from 'react'
import MoneyContext from '../../Intermediate/context/MoneyContext';

const Janta = () => {
    console.log(useContext(MoneyContext))
    const data = useContext(MoneyContext);
  return (
    <div>
      <h1> This is Janta Component </h1>
      <h2> {data.money}</h2>
      <h2>{data.adhar}</h2>
      <h1>{data.dollar}</h1>
    </div>
  );
}

export default Janta