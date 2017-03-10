import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import VideoBackground from './components/videoBackground';
import CurrentScore from './components/currentScore';
import HighScore from './components/highScore.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div className= 'cscore'>
          <CurrentScore/>
        </div>
        <div className="vplayer">
          <VideoBackground/>
        </div>
        <div className="hscore">
          <HighScore/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));