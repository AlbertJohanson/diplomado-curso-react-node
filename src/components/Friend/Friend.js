import React, { useState } from 'react';

import "./Friends.css";

export const Friend = (props) => {


    const [counter, setCounter] = useState(0);


    const increment = () => setCounter(prevCounter => prevCounter + 1);
    const decrement = () => setCounter(prevCounter => prevCounter - 1);


    return (
      <div className='Div'>

          <h1>{counter}</h1>
         
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
      </div>
    )
  }
  