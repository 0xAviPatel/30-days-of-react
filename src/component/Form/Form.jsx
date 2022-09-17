import React, { useState } from "react";

const Form = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  const [Data, setData] = useState([]);

  const onchangeHandler = (e) => {
    setName(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  // console.log("🚀 ~ Form ~ Name", Name);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([{ Name, Password }]);
  };
  console.log("🚀 ~ Form ~ Data", Data);

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={onchangeHandler}
        />

        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={passwordChange}
        />

        <button type="submit">Submit</button>

        {/* <p>
          <h2>name : {Name}</h2>
          <h2>Password : {Password}</h2>
        </p> */}

        {Data.map((i) => {
          return (
            <div>
              <p>{i.Name}</p>
              <p>{i.Password}</p>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default Form;
