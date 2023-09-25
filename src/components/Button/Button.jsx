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
  children: PropTypes.node.isRequired,
};
