import React, { useState } from 'react'

const State = () => {
    // let number = 0;

    const [number, setnumber] = useState(20.3);
   
    // number = "ram"
   

    const increase = () =>{
        // number++;
        setnumber(number+1)
        console.log("number = ",number)
    }

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={increase}>increase</button>
    </div>
  )
}

export default State