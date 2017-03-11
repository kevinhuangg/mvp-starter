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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    var styleCS = {color: 'white', 'textAlign':'center', marginTop: -25}
    var styleTS = {color: 'white', 'textAlign':'center', listStylePosition:'inside',
                   marginTop: 300}
    return (
      <body>
  <div class="sparks-combo">
    <div class="spark"></div>
    <div class="spark"></div>
    <div class="spark"></div>
    <div class="spark"></div>
  </div>

  <div id="wave-a" class="hot rainbow"></div>
  <div id="wave-a" class="cold rainbow"></div>

  <div id="wave-b" class="hot rainbow"></div>
  <div id="wave-b" class="cold rainbow"></div>

  <div id="nyan-cat" class="frame1">
    <div id="tail"></div>

    <div id="paws"></div>

    <div id="pop-tarts-body">
      <div id="pop-tarts-body-cream"></div>
    </div>

    <div id="head">
      <div id="face"></div>
    </div>
  </div>
<div id="app"></div>

  <audio autoplay="true" loop="true">
    <source src="../src/nyancat/audio/nyan-cat.ogg" type="audio/ogg" />
    <source src="../src/nyancat/audio/nyan-cat.mp3" type="audio/mpeg" />
  </audio>

</body>
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