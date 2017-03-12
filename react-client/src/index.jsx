import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CurrentScore from './components/currentScore.jsx';
import HighScore from './components/highScore.jsx';
import Nyancat from './components/nyancat.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timeElapsed: 0,
      scores: null
    }
    
    this.tick = this.tick.bind(this);
    this.getHighScores();
   
  }
  
  getHighScores() {
    $.get({
      url: '/scores', 
      success: (data) => {
        this.setState({
          scores: data
        })
      },
      error: (err) => {
        console.log('hi',err);
      }
    });
  }

  tick() {
    this.setState({timeElapsed: this.state.timeElapsed + 1});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    var styleCS = {position: 'fixed', top: 10, left: 10, color: 'white', 'textAlign':'center', zIndex: 500}
    var styleTS = {position: 'fixed', top: 30, left: 10, color: 'white', 'textAlign':'center'
                  ,listStylePosition:'inside', zIndex:500}
    
    if(this.state.scores) {
      return (
        <div>
          <div className= 'cscore' style ={styleCS}>
            <CurrentScore seconds={this.state.timeElapsed}/>
          </div>
          <div className="hscore" style={styleTS}>
            <HighScore highScore={this.state.scores}/>
          </div>
          <div>
            <Nyancat/>
          </div>
        </div>
      )
    }
    return (<div>Loading...</div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));