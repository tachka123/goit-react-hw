import React from 'react';
import T from 'prop-types';
import style from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} type="button" className={style.Button}>
      <span className={style.ButtonLabel}>Search</span>
    </button>
  );
};

Button.propTypes = {
  onLoadMore: T.func.isRequired,
};

export default Button;
