import React from 'react';

const RestartResumeButton = (props) => (
    <button
      className="restart-or-resume-button"
      onClick={props.onClick}
    >{props.restartOrResume}</button>
  );

export default RestartResumeButton;
