import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  smallSize,
  tags,
  largeSize,
  onImageClick,
}) => (
  <GalleryItem
    onClick={() =>
      onImageClick({
        largeUrl: largeSize,
        alt: tags,
      })
    }
  >
    <Image src={smallSize} alt={tags} />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  smallSize: PropTypes.string.isRequired,
  largeSize: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
