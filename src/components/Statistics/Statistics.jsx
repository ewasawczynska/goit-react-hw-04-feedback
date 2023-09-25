import { StyledList, StyledItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <StyledList>
      <li>
        Good: <StyledItem>{good}</StyledItem>
      </li>
      <li>
        Neutral: <StyledItem>{neutral}</StyledItem>
      </li>
      <li>
        Bad: <StyledItem>{bad}</StyledItem>
      </li>
      <li>
        Total: <StyledItem>{total}</StyledItem>
      </li>
      <li>
        Positive feedback: <StyledItem>{positivePercentage || '0'}%</StyledItem>
      </li>
    </StyledList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
