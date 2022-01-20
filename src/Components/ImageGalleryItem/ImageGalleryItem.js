import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ imageName, imageUrl, onImageClick, largeIMG }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => onImageClick({ largeIMG })}
        className="ImageGalleryItem-image"
        src={imageUrl}
        alt={imageName}
      />
    </li>
  );
};

export default ImageGalleryItem;
