import React from 'react';
import ReactDOM from 'react-dom';

class CurrentScore extends React.Component {

  constructor(props){
    console.log(props)
    super(props)
    this.state ={timeElapsed: 0}
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

  render() {
    return (
        <div className = "current-score">
          <div>You have nyan'd for {props.seconds/10} seconds</div>
        </div>
      )
  }
}

export default CurrentScore;