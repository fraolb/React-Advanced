import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople]=useState(data)
  const num =data.length;
  const handleClick=(id)=>{
   let newPeople = people.filter((person)=>person.id !==id)
    setPeople(newPeople)
  }
  return <>
    {people.map((person)=>{
      const { id, name }=person;
      return <div key={id} className="item">
          <h4>hello {name}</h4>
          <button type='btn' onClick={()=>handleClick(id)}>
      delete item
    </button>
      </div>
      
    })}
   
  </>;
};

export default UseStateArray;
