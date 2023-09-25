import { NotificationMessage } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <NotificationMessage>{message}</NotificationMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
