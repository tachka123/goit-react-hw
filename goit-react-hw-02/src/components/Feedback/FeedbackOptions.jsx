import React from 'react';
import T from 'prop-types';

const FeedbackOptions = ({ option, onLeaveFeedback, name }) => {
  return (
    <button name={name} onClick={onLeaveFeedback} type="button">
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  option: T.string.isRequired,
  onLeaveFeedback: T.func.isRequired,
  name: T.string.isRequired,
};

export default FeedbackOptions;
