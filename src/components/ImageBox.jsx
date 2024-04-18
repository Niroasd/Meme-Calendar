import React from 'react';
import './ImageBox.css';

const ImageBox = ({ imageSrc, altText, description }) => {
  return (
    <div className="image-box">
      <img src={imageSrc} alt={altText} />
      <p>{description}</p>
    </div>
  );
};

export default ImageBox;