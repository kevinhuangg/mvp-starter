import React from 'react';

var CurrentScore = (props) => (
  <div className = "current-score">
    <div>You have nyan'd for {props.seconds/10} seconds</div>
  </div>
)

export default CurrentScore;