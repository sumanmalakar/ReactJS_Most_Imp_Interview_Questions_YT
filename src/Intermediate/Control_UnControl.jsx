import React, { useRef, useState } from 'react'

export const Control_UnControl = () => {

    // control
    const [value, setvalue] = useState('')

    // uncontroll
    const inputRef = useRef(null)
    const handleClick = () =>alert(inputRef.current.value)

  return (
    <div>
      {/* control */}
      <h1>Control</h1>
      <input value={value} onChange={(e) => setvalue(e.target.value)} />
      <h2>{value}</h2>

      {/* uncontrol */}
      <h1>UnControl</h1>
      <input ref={inputRef}  />
     <button onClick={handleClick}>show value</button>
    </div>
  );
}
