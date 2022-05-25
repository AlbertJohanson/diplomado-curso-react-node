import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), hide: true };
    this.toggleClock = this.toggleClock.bind(this);
  }


  toggleClock() {
    this.setState(prevState => ({
        hide: prevState.hide ? false : true
    }));
  }

  componentDidMount() {
    const oneSecond = 1000;

    this.intervalId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, oneSecond);
  }


  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // componentDidUpdate(prevProps, prevState) {
  //     console.log(`prevProps = ${prevProps}`);
  //     console.log(`prevState = ${prevState}`);
  // }

  render() {
    return (
      <>
        <div>{this.state.hide && this.state.date.toLocaleTimeString()}</div>
        <button onClick={this.toggleClock}>Toggle Click</button>
      </>
    );
  }
}
