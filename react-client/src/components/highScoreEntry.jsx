import React from 'react';

var HighScoreEntry = (props) => {
  // var style = {textAlign:'lef'}
  
  return (
    <li className = 'high-score-entry'>{props.points.user} : {props.points.score} seconds</li> 
  )
}

export default HighScoreEntry;