import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CurrentScore from './components/currentScore.jsx';
import HighScore from './components/highScore.jsx';
import Nyancat from './components/nyancat.jsx'
import Sparkles from './components/sparkles.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      scores: null,
      timeElapsed: 0,
      nyanClicked: false
    }
    
    this.tick = this.tick.bind(this);
    this.getHighScores();
    this.nyanClick = this.nyanClick.bind(this);

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
    if(!this.state.nyanClicked) {
      this.setState({timeElapsed: this.state.timeElapsed + 1});
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nyanClick() {
    this.setState({nyanClicked: !this.state.nyanClicked })
  }

  render () {
    var styleCS = {position: 'fixed', top: '20%', left: '30%', color: 'white', zIndex: 10, fontSize:'150%'}
    var styleTS = {position: 'fixed', top: '30%', left: '40%', color: 'white', 'textAlign':'center'
                  ,listStylePosition:'inside', zIndex:10}
    
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
            <Sparkles/>
            <Nyancat clickHandler={this.nyanClick}/>
          </div>
        </div>
      )
    }
    return (<div>Loading...</div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));