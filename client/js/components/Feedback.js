import React from "react";

const Feedback = (props) => {
  return (
    <div className="feedback-container" style={props.showOrNot}>
      {props.content}
    </div>
  );
}

export default Feedback;
