import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue]=useState(1);
  const [value1, setValue1]=useState(1);
  useEffect(()=>{
    console.log("rendered");
  },[value])
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value+1)}>Add</button>
    <h1>{value1}</h1>
    <button className='btn' onClick={()=>setValue1(value1+1)}>Add</button>
  </>;
};

export default UseEffectBasics;
