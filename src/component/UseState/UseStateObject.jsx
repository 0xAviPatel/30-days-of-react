import React, { useState } from "react";

const UseStateObject = () => {
  const [myObject, setMyObject] = useState({
    name: "Avi",
    age: 22,
  });

  const changeObject = () => {
    setMyObject({ ...myObject, name: "Haresh" });
  };
  return (
    <div>
      <h1>Name : {myObject.name} </h1>
      <h3>Age : {myObject.age}</h3>

      <button onClick={changeObject}>Update</button>
    </div>
  );
};

export default UseStateObject;
