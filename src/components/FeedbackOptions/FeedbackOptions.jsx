import React from 'react';
import css from './feedbackOptions.module.css';

export default function FeedbackOptions({ doGood, doNeutral, doBad }) {
  return (
    <>
      <button type="button" className={css.feedbackButton} onClick={doGood}>
        Good
      </button>
      <button type="button" className={css.feedbackButton} onClick={doNeutral}>
        Neutral
      </button>
      <button type="button" className={css.feedbackButton} onClick={doBad}>
        Bad
      </button>
    </>
  );
}
