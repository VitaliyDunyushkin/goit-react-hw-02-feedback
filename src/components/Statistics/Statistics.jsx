import React from 'react';
import css from './statistics.module.css';

export default function Statistics({ stats, total, percentOfGood }) {
  const { good, neutral, bad } = stats;

  return (
    <>
      <ul>
        <li className={css.statsItem}>
          Good: <span className={css.statsNumber}>{good}</span>
        </li>
        <li className={css.statsItem}>
          Neutral: <span className={css.statsNumber}>{neutral}</span>
        </li>
        <li className={css.statsItem}>
          Bad: <span className={css.statsNumber}>{bad}</span>
        </li>
        <li className={css.statsItem}>
          Total: <span className={css.statsNumber}>{total}</span>
        </li>
        <li className={css.statsItem}>
          Positive feedback:{' '}
          <span className={css.statsNumber}>{percentOfGood}%</span>
        </li>
      </ul>
    </>
  );
}