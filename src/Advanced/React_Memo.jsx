import React, { useState } from 'react'

const ChildComponent = React.memo(({name})=>{
return <h1>Hello, {name}!</h1>
})

const React_Memo = () => {
    const [name, setname] = useState('suman')
  return (
    <div>
        <h1>This is React memo</h1>
        <ChildComponent name={name} />
        <button onClick={()=>setname("web dev mastery")}>Change Name</button>

    </div>
  )
}

export default React_Memo