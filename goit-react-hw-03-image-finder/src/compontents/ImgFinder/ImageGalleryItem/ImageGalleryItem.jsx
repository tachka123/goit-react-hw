import React from 'react';
import T from 'prop-types';
import ReactImageAppear from 'react-image-appear';
import style from './ImageGallaryItem.module.css';

const ImageGalleryItem = ({ item: { webformatURL, largeImageURL } }) => {
  return (
    <li large={largeImageURL} className={style.ImageGalleryItem}>
      <ReactImageAppear
        src={webformatURL}
        alt={largeImageURL}
        className={style.ImageGalleryItemImage}
        animation="bounceIn"
        animationDuration="2s"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: T.shape({
    webformatURL: T.string.isRequired,
    largeImageURL: T.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
