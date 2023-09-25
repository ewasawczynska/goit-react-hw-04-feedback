import PropTypes from 'prop-types';

import { SectionBox, Title, Content } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionBox>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </SectionBox>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
