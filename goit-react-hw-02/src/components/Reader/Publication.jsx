import React from 'react';
import T from 'prop-types';

const Publication = ({ item: { title, text } }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.defaultProps = {
  item: {
    title: 'Empty Title',
    text: 'There is no text',
  },
};

Publication.propTypes = {
  item: T.shape({
    title: T.string,
    text: T.string,
  }),
};

export default Publication;
