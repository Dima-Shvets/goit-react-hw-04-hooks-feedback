import { PropTypes } from 'prop-types';
import { useState } from 'react';
import s from './Sectiom.module.scss';

export function Section({ titleName, children }) {
  const [title] = useState(titleName);

  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.protoTypes = {
  title: PropTypes.sting,
};
