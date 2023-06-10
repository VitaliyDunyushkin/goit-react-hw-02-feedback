import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, onClick }) {
  const btnNames = options.map(
    option => option.charAt(0).toUpperCase() + option.slice(1)
  );

  return btnNames.map(btnName => (
    <button
      key={nanoid()}
      type="button"
      className={css.feedbackButton}
      name={btnName.toLowerCase()}
      onClick={onClick}
    >
      {btnName}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
