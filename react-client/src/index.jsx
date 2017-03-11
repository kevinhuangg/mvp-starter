import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CurrentScore from './components/currentScore.jsx';
import HighScore from './components/highScore.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timeElapsed: 0
    }
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({timeElapsed: this.state.timeElapsed + 1});
  }

  componentDidMount() {
    
    this.interval = setInterval(this.tick, 100)

    $.get({
      url: '/scores', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('hi',err);
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    var styleCS = {color: 'white', 'textAlign':'center', marginTop: -25}
    var styleTS = {color: 'white', 'textAlign':'center', listStylePosition:'inside',
                   marginTop: 300}
    return (
      <div>
        <div className= 'cscore' style ={styleCS}>
          <CurrentScore seconds={this.state.timeElapsed}/>
        </div>
        <div className="hscore" style={styleTS}>
          <HighScore/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));