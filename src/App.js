import React from "react";
import Button from "./component/Button";
// import CanDrive from "./component/CanDrive";
import Header from "./component/Header";
// import Skills from "./component/Skills";

const App = () => {
  const name = "Avi Patel";
  const language = "Javascript";

  const sayHi = () => {
    alert('Hi')
  }

  

  return (
    <div>
      <Header name={name} language={language} />
      {/* <CanDrive age={22}/> */}
      {/* <Skills skills={['HTML','CSS','Javascript']}/> */}
      <Button greetings={sayHi}/>
    </div>
  );
};

export default App;
