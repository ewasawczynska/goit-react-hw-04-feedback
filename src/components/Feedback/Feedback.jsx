import PropTypes from 'prop-types';

import { OptionsBox } from './Feedback.styled';
import { Button } from 'components/Button';

export default function Feedback({ options, updateFeedback }) {
  return (
    <OptionsBox>
      {options.map(option => (
        <Button key={option} handler={updateFeedback}>
          {option}
        </Button>
      ))}
    </OptionsBox>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateFeedback: PropTypes.func.isRequired,
};
