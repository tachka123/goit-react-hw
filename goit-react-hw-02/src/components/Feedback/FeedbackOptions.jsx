import React from 'react';
import T from 'prop-types';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <button onClick={onLeaveFeedback} type="button">
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  option: T.string.isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;
