import React, { useState } from "react";

const App = () => {
  const [values, getValues] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    getValues(val);
    console.log(val)
  };
  return (
    <div>
      <input placeholder="Enter your Name" onChange={handleChange} />
    </div>
  );
};

export default App;
