import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ImageModal } from './Modal.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    return createPortal(
      <Overlay>
        <ImageModal>
          <img src="" alt="" />
        </ImageModal>
      </Overlay>,
      modalRoot
    );
  }
}
