import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  options = Object.keys(this.state);

  notificationMessage = 'There is no feedback';

  handleFeedbackBtns = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const total = this.countTotalFeedback();
    const percentOfGood = this.countPositiveFeedbackPercentage();
    const message = this.notificationMessage;
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onClick={this.handleFeedbackBtns}
          />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentOfGood={percentOfGood || 0}
            />
          ) : (
            <p style={{ fontSize: '2rem', fontWeight: '600' }}>{message}</p>
          )}
        </Section>
      </>
    );
  }
}
