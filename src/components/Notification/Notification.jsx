import { Notice, Icon } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ children }) => {
  return (
    <Notice>
      <Icon widt="20px" height="20px">
        <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
      </Icon>
      {children}
    </Notice>
  );
};

Notification.propTypes = {
  children: PropTypes.node,
};
