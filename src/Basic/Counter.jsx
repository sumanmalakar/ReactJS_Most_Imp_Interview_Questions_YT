import React, { useState } from 'react'

const Counter = () => {
    const [counter, setcounter] = useState(0)
  return (
    <div>
        <h1>Virtual Dom</h1>
        <h1>{counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Increase</button>
    </div>
  )
}

export default Counter