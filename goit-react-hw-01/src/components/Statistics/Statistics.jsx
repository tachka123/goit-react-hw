import React from 'react';
import Proptypes from 'prop-types';
import style from './static.module.css';
import getRandomColorStyle from './getRandomColorStyle';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li key={id} style={getRandomColorStyle()} className={style.item}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  title: Proptypes.string,
  stats: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string,
      label: Proptypes.string,
      percentage: Proptypes.number,
    }),
  ),
};

export default Statistics;
