import React from 'react';
import Proptypes from 'prop-types';
import style from './static.module.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return { backgroundColor: color };
}

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(({ id, percentage, label }) => (
          <li key={id} style={getRandomColor()} className={style.item}>
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
};

Statistics.propTypes = {
  title: Proptypes.string,
  stats: Proptypes.array,
  id: Proptypes.string,
  label: Proptypes.string,
  percentage: Proptypes.string,
};

export default Statistics;
