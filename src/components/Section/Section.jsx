import React from 'react';
import css from './section.module.css';

export default function Section({ title, children }) {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
}
