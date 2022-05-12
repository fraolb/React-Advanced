import React, { useState } from 'react';

const ErrorExample = () => {
  const [name, setName]=useState("useState error example")

  const changeValue = ()=>{
    setName("useState example finished")
  }
  return (
    <div>
     <h2>{name}</h2>
     <button type='button' onClick={changeValue}>Press me</button>
    </div>
  )
};

export default ErrorExample;
