import { Component } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState(() => ({ isModalOpen: false }));

  render() {
    const { smallSize, tags, largeSize } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <Image src={smallSize} alt={tags} />
        </GalleryItem>

        {isModalOpen && (
          <Modal src={largeSize} alt={tags} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  smallSize: PropTypes.string.isRequired,
  largeSize: PropTypes.string.isRequired,
};
