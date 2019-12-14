import React, { Component } from 'react';
import T from 'prop-types';
import style from './statistic.module.css';
import CountAverage from './CountPercentOfAverageFeedback';
import Statisctics from './Statistics';
import FeedBackOptions from './FeedbackOptions';

class Section extends Component {
  static propTypes = {
    title: T.string,
  };

  static defaultProps = {
    title: 'Please leave feedback',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };

  addComment = e => {
    const { name } = e.target;
    this.setState(prev => {
      return {
        [name]: prev[name] + 1,
        total: prev.total + 1,
      };
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => {
      return {
        feedback: CountAverage(good, total),
      };
    });
  };

  render() {
    const { title } = this.props;
    const { good, neutral, bad, total, feedback } = this.state;
    return (
      <div className={style.container}>
        <h2>{title}</h2>
        <FeedBackOptions
          onLeaveFeedback={this.addComment}
          name="good"
          option="GOOD"
        />
        <FeedBackOptions
          onLeaveFeedback={this.addComment}
          option="NEUTRAL"
          name="neutral"
        />
        <FeedBackOptions
          onLeaveFeedback={this.addComment}
          name="bad"
          option="BAD"
        />
        <h2>Statisctics</h2>
        {good === 0 && neutral === 0 && bad === 0 ? (
          'No feedback given'
        ) : (
          <Statisctics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedback={feedback}
          />
        )}
      </div>
    );
  }
}

export default Section;
