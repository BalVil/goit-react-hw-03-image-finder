import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageHits }) => {
  return imageHits.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  ));
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  imageHits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
