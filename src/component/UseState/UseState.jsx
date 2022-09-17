import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("Avi");
  const changeName = () => {
    name == "Avi" ? setName("Patel") : setName("Avi");
  };

  return (
    <div>
      <div>{name}</div>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default UseState;
