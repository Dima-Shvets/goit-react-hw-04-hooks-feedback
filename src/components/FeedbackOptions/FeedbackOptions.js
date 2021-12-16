import { PropTypes } from 'prop-types';
import s from './FeedbackOptions.module.scss';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const capitalize = string => {
    return string[0].toUpperCase() + string.substring(1);
  };

  const optionNames = Object.keys(options);

  return (
    <ul className={s.list}>
      {optionNames.map(option => {
        return (
          <li key={option} className={s.element}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {capitalize(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.protoTypes = {
  options: PropTypes.sting,
  onLeaveFeedback: PropTypes.func,
};
