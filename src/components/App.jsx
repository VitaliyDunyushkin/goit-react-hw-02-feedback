import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  doGood = event => {
    const btnText = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  doNeutral = event => {
    const btnText = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  doBad = event => {
    const btnText = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <>
        <Feedback
          doGood={this.doGood}
          doNeutral={this.doNeutral}
          doBad={this.doBad}
          stats={this.state}
        />
      </>
    );
  }
}
