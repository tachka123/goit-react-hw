import React from 'react';
import style from './Loader.module.css';

const SetLoader = ({ loading }) =>
  loading && (
    <div className={style.LoaderPos}>
      <div className={style.ldsRing}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );

export default SetLoader;
