import React, { useState } from "react";

const App = () => {
  const [values, getValues] = useState({
    firstName: "",
    lastName: "",
    country: "",
  });

  // const handleChange = (e) => {
  //   // const val = e.target.value;
  //   // getValues(val);

  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    getValues({
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const { firstName, lastName, country } = values;
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Country"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
