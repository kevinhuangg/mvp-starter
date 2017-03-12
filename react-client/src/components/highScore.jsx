import React from 'react';
import HighScoreEntry from './highScoreEntry.jsx'

var HighScore = (props) => {
// console.log(props.highScore)
  return (
      <div className = "high-score">Top Scores Today
        <ol>
          {props.highScore.map(entry => <HighScoreEntry points={entry}/> )}
        </ol>
      </div>
     );
}

export default HighScore;


