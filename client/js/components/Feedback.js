import React from "react";

const Feedback = (props) => {
  return (
    <div className="feedback-container" style={props.showOrNot}>
      <p>{props.text}</p>
    </div>
  );
};

export default Feedback; 
