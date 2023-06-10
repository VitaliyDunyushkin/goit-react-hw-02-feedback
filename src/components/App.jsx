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

  options = Object.keys(this.state);

  notificationMessage = 'There is no feedback';

  handleFeedbackBtns = event => {
    // console.log(event.target.name);
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
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
            options={this.options}
            onClick={this.handleFeedbackBtns}
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
