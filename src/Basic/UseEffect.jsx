import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [counter, setcounter] = useState(0)

    useEffect(() => {
      document.title  = counter
      console.log("UseEffect is running..")
    }, [counter]) // dependecy array
    
  return (
    <div>UseEffect
        <h1>{counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Icrease</button>
    </div>
  )
}

export default UseEffect