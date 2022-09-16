import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    count === 0
      ? (document.title = "Chats")
      : (document.title = `Chats (${count})`);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default UseEffect;
