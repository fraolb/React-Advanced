import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, usePerson] = useState({
    name:'peter',
    age:24,
    message:'random text'
  })

  const ChangeName =()=>{
    usePerson(
      {...person,
        name:'kebede'}
    )
  }

  return <div>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button type='btn' onClick={ChangeName}>Change Name</button>
  </div>;
};

export default UseStateObject;
