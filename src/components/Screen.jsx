import React from "react";

const Screen = ({ number, formula }) => {
  return (
    <div className="screen">
      <span className="screen-formula" id="screen-formula">
        {formula}
      </span>
      <span className="screen-number" id="screen-number">
        {number}
      </span>
    </div>
  );
};

export default Screen;
