import { PropTypes } from 'prop-types';
import s from './Statistics.module.scss';

export function Statistics({ good, neutral, bad, total }) {
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  return (
    <ul>
      <li className={s.element}>Good:{good}</li>
      <li className={s.element}>Neutral:{neutral}</li>
      <li className={s.element}>Bad:{bad}</li>
      <li className={s.element}>Total:{total}</li>
      <li className={s.element}>
        Positive feedback:{countPositiveFeedbackPercentage()}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};
