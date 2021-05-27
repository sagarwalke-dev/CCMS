import React from "react";
import spinner from "./images/spinner.gif";
function Loader() {
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: "350px",
          margin: "auto",
          display: "block",
          marginTop: "10%",
        }}
        alt='Loading...'
      />
    </div>
  );
}

export default Loader;
