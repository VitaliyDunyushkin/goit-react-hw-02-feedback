import React from 'react';
import PropTypes from 'prop-types';

import css from './statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  percentOfGood,
}) {
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentOfGood: PropTypes.number.isRequired,
};
