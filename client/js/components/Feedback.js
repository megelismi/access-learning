import React from "react";

const Feedback = (props) => {
  return (
    <div className="feedback-container" style={props.showOrNot}>
      <p>Great job!</p>
    </div>
  );
};

export default Feedback; 
