import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      time: parseInt(this.props.from),
      start: Date.now()
    };
  }

  componentWillUnmount() {
    clearInterval(this.counter)
  }
  tick() {
    this.setState({
      time: (this.state.time + 1)
    })
  }
  startCounter() {

      clearInterval(this.counter)
      this.counter = setInterval(this.tick.bind(this), 1000)
  }

  restartTimer(){
    this.setState({
      time: parseInt(this.props.from)
    })
  }

  render(){
    this.startCounter();
    if (this.state.time < this.props.to) {
      return (
        <section class="hero is-primary counter">
      <div class="hero-body" onClick={this.restartTimer.bind(this)}>
        <div class="container">
          <h1 class="title">
            {this.props.to - this.state.time}
          </h1>
          <h2 class="subtitle">
            counter from {this.props.from} to {this.props.to}
          </h2>
        </div>
      </div>
    </section>
    );}
    else {
      return (
        <section class="hero is-danger counter">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            time is up!
          </h1>
          <h2 class="subtitle">
            counter from {this.props.from} to {this.props.to}
          </h2>
        </div>
      </div>
    </section>
  );
    }
  }
}

export default Counter;
