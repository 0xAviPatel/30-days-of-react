import React, { useState } from "react";
import LoggedIn from "./component/LoggedIn";
import LoginButton from "./component/LoginButton";

const App = () => {
  // const numbers = [1, 2, 3, 4, 5];

  // const [value, setValue] = useState(0);

  // const [decrease, setDecrease] = useState(value);

  // const changeNum = () => {
  //   setValue(value + 1);
  // };

  // const decreaseNum = () => {
  //   setDecrease(decrease - 1);
  // };

  const [loggedIn, setLoggedIn] = useState(false);

  const Data = {
    welcome: "Hello",
    title: "Getting started with react",
    subtitle: "learning ternary operator",
    firstName: "Avi",
    lastName: "Patel",
    date: new Date().getDate(),
  };

  // let status;
  // let Text;

  const onLoggedIn=()=>{
    setLoggedIn(true)
  }
  // loggedIn
  //   ? (Text = <h1>You are logged in</h1>)
  //   : (Text = <h1>You are not logged in</h1>);


  return (
    <div>
      {/* <button onClick={changeNum}>You have clicked {value} times</button>
      <button onClick={decreaseNum}>You have clicked {decrease} times</button> */}
      <LoggedIn data={Data} />
      {/* {status} */}
      <LoginButton text={loggedIn ? 'You are logged in' : 'You are not logged in'} onClick={onLoggedIn} />
    </div>
  );
};

export default App;
