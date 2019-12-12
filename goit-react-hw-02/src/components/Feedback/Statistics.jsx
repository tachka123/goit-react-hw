import React from 'react';
import T from 'prop-types';
import Statistic from './Statisctic';

const Statistics = ({ good, neutral, bad, total, feedback }) => {
  return (
    <>
      <Statistic label="Good" value={good} />
      <Statistic label="Neutral" value={neutral} />
      <Statistic label="Bad" value={bad} />
      <Statistic label="Total" value={total} />
      <Statistic label="Feedback" value={feedback} percent="%" />
    </>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  feedback: 0,
};

Statistics.propTypes = {
  good: T.number,
  neutral: T.number,
  bad: T.number,
  total: T.number,
  feedback: T.number,
};

export default Statistics;
