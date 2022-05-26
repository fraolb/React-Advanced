import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const reducer=(state,action)=>{

  }
  const [name,setName]=useState('')
  const [state, dispatch]=useReducer(reducer,)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(name){
    setShowModal(true)
    setPeople([...people,{id:new Date().getTime().toString(),name}])
    setName('')
    }
    else{
      setShowModal(true)
    }
  }
  return <>
    {showModal && <Modal />}
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input 
          type='text' 
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <button type='submit'>Add Person</button>
    </form>
    {people.map((p)=>{
      return <div key={p.id}>{p.name}</div>
    })}
  </>;
};

export default Index;
