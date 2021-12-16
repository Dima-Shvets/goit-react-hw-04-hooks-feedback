import { Section } from './components/Section';
import { Statistics } from './components/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Notification } from './components/Notification';
import { useState } from 'react';
import './App.scss';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonHandler = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  return (
    <>
      <Section titleName="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={buttonHandler}
        />
      </Section>
      <Section titleName="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        )}
      </Section>
    </>
  );
}

export default App;
