import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, onClick }) {
  return options.map(option => (
    <button
      key={nanoid()}
      type="button"
      className={css.feedbackButton}
      name={option}
      onClick={() => onClick(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
