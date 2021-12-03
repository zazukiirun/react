import React, { useState , useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [name, setName] = useState({firstName:'firstname' , lastName: 'lastname'});
  const [count, setCount] = useState(9);
  
  useEffect(() => {
    document.title = `You click ${count} times`;
    console.log('useEffect called'); 
    return () => {
      console.log('unmount')
    }


  },[count]);
  
  return (
    <div>
      <p>You Click {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount+ 1)}>Increment</button>
      <input type="text" value={name.firstName} onChange= {e => setName({...name,firstName: e.target.value})} />
      <input type="text" value={name.lastName} onChange= {e => setName({...name,lastName: e.target.value})} />
      <h2> {JSON.stringify(name)}</h2>
    </div>
  );
}

export default Example;
