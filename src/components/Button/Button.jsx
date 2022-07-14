import { MoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ handleMoreImage }) => (
  <MoreBtn onClick={handleMoreImage} type="submit">
    Load More
  </MoreBtn>
);
export default Button;

Button.propTypes = {
  handleMoreImage: PropTypes.func.isRequired,
};
