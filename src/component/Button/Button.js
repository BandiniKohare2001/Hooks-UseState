import "./Button.css"

import { useState } from 'react';


export default function Button() {
  const [count, setCount] = useState(0); //initial state is 0

  return (
    <>
    <div className="button">
      
      <button onClick={() => setCount(count + 1)}>+</button>
    <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}