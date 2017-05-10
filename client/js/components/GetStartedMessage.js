import React from "react";

const GetStartedMessage = (props) => {
  return (
    <div className="get-started-message">
      <h1>{props.welcomeMessage}</h1>
      <p> Your monster is tiny and needs your help growing.
      For every question that you get right, you monster will grow bigger.
      See how large it can get! If you get the question incorrect, no worries.
      We will teach you the answer, then you will have a chance to master it later. Good luck!</p>
      <button className="get-started-button" onClick={props.getStarted}>
        Get started
      </button>
    </div>
  );
}

export default GetStartedMessage;
