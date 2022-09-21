import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  const enterYourName = useRef(null);
  const [show, setShow] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    const name = enterYourName.current.value;

    name.length === 0 ? alert("please enter your name") : setShow(true);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="yourName">Enter Name</label>
          <input type="name" id="yourName" ref={enterYourName} />
        </div>
        <button>Submit</button>
      </form>

      <p>{show ? `Your name is ${enterYourName.current.value}` : ""}</p>
    </div>
  );
};

export default Uncontrolled;
