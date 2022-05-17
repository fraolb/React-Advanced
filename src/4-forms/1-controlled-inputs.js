import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName]=useState("")
  const [email, setEmail]=useState("")
  const [people, setPeople]=useState([])
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(firstName && email){
        const person={firstName ,email};
        setPeople((p)=>{
          return [...p, person]
        })
        setFirstName('')
        setEmail('')
      }
  }
  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input 
            type='text' 
            id='firstName' 
            name='firstName'
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>email : </label>
          <input 
            type='email' 
            id='email' 
            name='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>Add Person</button>
      </form>
      {people.map((p)=>{
        return <h2>{p.firstName}</h2>
      })}
    </article>
    
  </>;
};

export default ControlledInputs;
