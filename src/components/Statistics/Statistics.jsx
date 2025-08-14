import { StyledItem, StyledList } from './Statistics.styled';

export const Statistics = ({ option, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = option;

  const items = [
    { name: 'Good', value: good },
    { name: 'Neutral', value: neutral },
    { name: 'Bad', value: bad },
    { name: 'Total', value: totalFeedback },
    {
      name: 'Positive feedback',
      value: `${positiveFeedback}%`,
    },
  ];

  return (
    <StyledList>
      {items.map((el) => (
        <StyledItem key={el.name}>
          {el.name}: {el.value}
        </StyledItem>
      ))}
    </StyledList>
  );
};
