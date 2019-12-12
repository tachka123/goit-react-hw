import React from 'react';
import T from 'prop-types';

const Statisctic = ({ label, value, percent }) => {
  return (
    <span>
      {label}: {value} {percent && <>{percent}</>}
    </span>
  );
};

Statisctic.defaultProps = {
  label: 'error',
  value: 0,
  percent: '',
};

Statisctic.propTypes = {
  label: T.string,
  value: T.number,
  percent: T.string,
};

export default Statisctic;
