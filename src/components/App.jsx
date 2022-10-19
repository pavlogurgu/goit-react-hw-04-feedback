import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { RateButtons } from './RateButtons/RateButtons';
import { AppPart } from './RateButtons/RateButtons.styled';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalVotes = () => {
    
    return good + neutral + bad;
  };
  const countPositiveVotes = () => {
   
    return Number.parseInt(
      countTotalVotes() > 0
        ? (good / countTotalVotes()) * 100
        : 0
    );
  };
  const incrementFeedback = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };
  


    const totalFeedback = countTotalVotes();

    const options =  [ 'good', 'neutral', 'bad' ]

    const PositiveFeedbackPercentage = countPositiveVotes();

    return (
      <AppPart>
        <h1>Please leave the feedback</h1>
        <RateButtons
          options={options}
          onFeedback={incrementFeedback}
        />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            PositiveFeedbackPercentage={PositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </AppPart>
    );
  
}







