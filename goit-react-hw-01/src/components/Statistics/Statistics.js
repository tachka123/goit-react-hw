import React from 'react';
import Proptypes from 'prop-types';
import style from './static.module.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return { backgroundColor: color };
}

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(item => (
          <li key={item.id} style={getRandomColor()} className={style.item}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}</span>
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
};

export default Statistics;
