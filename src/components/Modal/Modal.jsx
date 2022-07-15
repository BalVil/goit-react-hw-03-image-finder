import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ImageModal } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeUrl, alt } = this.props.onModalImage;

    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ImageModal>
          <img src={largeUrl} alt={alt} />
        </ImageModal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propsTypes = {
  largeUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
