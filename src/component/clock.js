import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const time = new Date();
    const startSeconds = time.getTime() - props.startTime.getTime()
    const clock = this.calculateTime(startSeconds);
    this.state = {
      seconds: startSeconds,
      clock: clock,
    }
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1,
      clock: this.calculateTime(this.state.seconds),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  calculateTime = (seconds) => {
    var date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }

  render() {
    return (
      <div>
        {this.state.clock}
      </div>
    )
  }
}

export default Clock;