import React, { useCallback, useState } from 'react'


const UseCallback = () => {
    const [cout, setCout] = useState(0);

    const increment = useCallback(()=>{
        setCout(prev=>prev+1)
    },[]);
    
  return (
    <div>
        <h1>count = {cout}</h1>
    <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCallback