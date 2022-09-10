import React from "react";

const Header = (props) => {
  console.log("🚀 ~ Header ~ props", props);

  return (
    <div>
      <p>My name is {props.name}</p>
      <p>Favorite language {props.language}</p>
    </div>
  );
};

export default Header;
