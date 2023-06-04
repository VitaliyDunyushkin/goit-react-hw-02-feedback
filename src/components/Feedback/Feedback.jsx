import React from 'react';
import css from './feedback.module.css';

export default function Feedback({ doGood, doNeutral, doBad, stats }) {
  const { good, neutral, bad } = stats;
  const total = good + neutral + bad;
  const percentOfGood = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <>
      <p className={css.feedbackTitle}>Please leave feedback</p>
      <button type="button" className={css.feedbackButton} onClick={doGood}>
        Good
      </button>
      <button type="button" className={css.feedbackButton} onClick={doNeutral}>
        Neutral
      </button>
      <button type="button" className={css.feedbackButton} onClick={doBad}>
        Bad
      </button>
      <p className={css.feedbackTitle}>Statistics</p>
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
