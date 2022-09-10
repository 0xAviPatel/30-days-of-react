import React from "react";

const CanDrive = (props) => {
  console.log("🚀 ~ CanDrive ~ props", props);
  return <div>
    <p>You are {props.age}</p>
    {props.age>=18 ? `You can drive`: `Tou can't drive` }
  </div>;
};

export default CanDrive;
