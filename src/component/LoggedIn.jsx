import React, { useState } from "react";

const LoggedIn = ({data}) => {
    // console.log("🚀 ~ LoggedIn ~ props", data)
     
  return (
    <header>
      <div className="header-wrapper">
        <h1>{data.welcome}</h1>
        <h2>{data.title}</h2>
        <h3>{data.subtitle}</h3>
        <p>
          {data.firstName} {data.lastName}
        </p>
        <small>{data.date}</small>
        <p>Select a country for your next holiday</p>
      </div>
    </header>
  );
};

export default LoggedIn;
