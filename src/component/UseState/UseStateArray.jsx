import React, { useState } from "react";

const UseStateArray = () => {
  const myBioData = [
    {
      id: 0,
      name: "Avi",
      age: 22,
    },
    {
      id: 1,
      name: "Mann",
      age: 22,
    },
    {
      id: 2,
      name: "Haresh",
      age: 23,
    },
  ];

  // const [Clear, setClear] = useState(myBioData);
  const [array, setArray] = useState(myBioData);

  // const clearData = () => {
  //   setClear([]);
  // };

  const removeData = (e) => {
    const mynewArray = array.filter((i) => {
      return i.id !== e;
    });
    console.log("🚀 ~ mynewArray ~ mynewArray", mynewArray)
    setArray(mynewArray);
    console.log("🚀 ~ removeData ~ mynewArray", mynewArray);
  };

  return (
    <div>
      {myBioData.map((item) => {
        return (
          <h1>
            Your name is {item.name} and age is {item.age}{" "}
            <button onClick={() => removeData(item.id)}>Remove TODO</button>
          </h1>
        );
      })}

      {/* <button onClick={clearData}>Clear</button> */}
    </div>
  );
};

export default UseStateArray;
