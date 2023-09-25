import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ handler, children }) {
  return (
    <StyledButton type="button" onClick={handler}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
