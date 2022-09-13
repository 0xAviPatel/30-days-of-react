import React from "react";

const LoginButton = (props) => {
  // console.log("🚀 ~ LoginButton ~ onClick", onClick);
  // console.log("🚀 ~ LoginButton ~ text", text);
  return (
    <div>
      {/* <button onClick={props.onClick}>{props.text}</button> */}
      <button onClick={props.onClick}>{props.text}</button>

    </div>
  );
};

export default LoginButton;
