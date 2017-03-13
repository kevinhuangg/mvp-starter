import React from 'react';
import ReactDOM from 'react-dom';

var CurrentScore = (props) => {
  return (
      <div className = "current-score">
        <div>You have nyan'd for {props.seconds/10} seconds</div>
      </div>
   )
}

export default CurrentScore;