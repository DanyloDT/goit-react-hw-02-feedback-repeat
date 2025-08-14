import { Component } from 'react';
import './App.css';
import { Feedback } from './components/Feedback/Feedback';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';
import { Notification } from './components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const key = e.target.name;
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good * 100) / totalFeedback);
  }
  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback option={this.state} handleClick={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              option={this.state}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
