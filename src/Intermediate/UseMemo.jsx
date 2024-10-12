import React, { useMemo, useState } from 'react'


const UseMemo = () => {
    const [count, setCount] = useState(0);

   const doubleCount =  useMemo(() => {
        console.log("Running UseMemo")
        return count*2;
    }, [count])


  return (
    <div>
        <p>Count : {count}</p>
        <p>Double : {doubleCount}</p>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
    </div>
  )
}

export default UseMemo