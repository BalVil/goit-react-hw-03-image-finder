import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
