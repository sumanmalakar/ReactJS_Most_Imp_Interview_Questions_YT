import React, { useState } from 'react'

const Form = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!email || password.length<6){
            seterror("Email is require and password must be at least 6 characters")
        }else{
            alert('Form Submitted!')
            seterror('')
        }

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {error && <h1>{error}</h1>}
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form