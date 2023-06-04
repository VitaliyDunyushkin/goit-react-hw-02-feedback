import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  title = {
    feedbackOptions: 'Please leave feedback',
    statistics: 'Statistics',
  };

  notificationMessage = 'There is no feedback';

  doGood = event => {
    // const btnText = event.target.textContent.toLowerCase();
    // console.log(btnText);

    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  doNeutral = event => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  doBad = event => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) =>
    good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const percentOfGood = this.countPositiveFeedbackPercentage();
    const message = this.notificationMessage;

    return (
      <>
        <Section title={this.title.feedbackOptions}>
          <FeedbackOptions
            doGood={this.doGood}
            doNeutral={this.doNeutral}
            doBad={this.doBad}
          />
        </Section>

        <Section title={this.title.statistics}>
          {total !== 0 ? (
            <Statistics
              stats={this.state}
              total={total}
              percentOfGood={percentOfGood}
            />
          ) : (
            <p style={{ fontSize: '2rem', fontWeight: '600' }}>{message}</p>
          )}
        </Section>
      </>
    );
  }
}
