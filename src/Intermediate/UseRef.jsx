import React, { useRef } from 'react'

const UseRef = () => {
    
    const divRef = useRef(null);

    const toggleColor = () =>{
        // console.log(divRef)
        divRef.current.style.backgroundColor = 'blue';
        divRef.current.style.color = 'white';
    }

  return (
    <div>
        <div ref={divRef} style={{
            backgroundColor:'yellow',
            height:'50px',
            width:'50px',
            padding:'50px',
            color:'black'
        }}>
            Change my background color!
        </div>
        <h1>Hello</h1>
        <button onClick={toggleColor}>change color</button>
    </div>
  )
}

export default UseRef