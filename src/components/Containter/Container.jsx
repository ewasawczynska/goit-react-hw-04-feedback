import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
