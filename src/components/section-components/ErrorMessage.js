import React from "react";

const Error = (props) => {
  return (
    <div className="error" style={{ color: props.color }}>
      {props.message}
    </div>
  );
};

export default Error;
