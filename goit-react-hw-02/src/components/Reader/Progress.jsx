import React from 'react';
import T from 'prop-types';

const Progress = ({ publicationIndex, massiveLength }) => {
  return (
    <p>
      {publicationIndex + 1}/{massiveLength}
    </p>
  );
};

Progress.defaultProps = {
  publicationIndex: 1,
  massiveLength: 1,
};

Progress.propTypes = {
  publicationIndex: T.number,
  massiveLength: T.number,
};

export default Progress;
