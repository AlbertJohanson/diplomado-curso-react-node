import React, {useState, useEffect} from 'react'

export const Effect = () => {
    const [clickCount, setClickCount] = useState(0);


    const increment = () => setClickCount((prev) => prev + 1);


    useEffect(() => {
        document.addEventListener("mousedown", increment);
        return () => {
            document.removeEventListener("mousedown", increment);
        }
    }, []);

  return (
    <h1>Count: {clickCount}</h1>
  )
}
