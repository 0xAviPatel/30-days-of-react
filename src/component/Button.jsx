import React from "react";

const Button = (props) => {
  console.log("🚀 ~ Button ~ props", props);
  
  return (
    <div>
      <button onClick={props.greetings}>Click me</button>
    </div>
  );
};

export default Button;
