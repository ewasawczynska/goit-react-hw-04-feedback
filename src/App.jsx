import { useState } from 'react';

import {
  Section,
  Feedback,
  Container,
  Statistics,
  Notification,
} from 'components';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const addFeedback = e => {
    const feedbackType = e.currentTarget.textContent.toLowerCase();
    setState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = state.good + state.neutral + state.bad;

  const countPositiveFeedbackPercentage = Math.ceil(
    (state.good / countTotalFeedback) * 100
  );

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <Feedback
          options={['GOOD', 'NEUTRAL', 'BAD']}
          updateFeedback={addFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
}
