import React from 'react';
import './ImageBox.css';

const ImageBox = ({ month, imageSrc, altText, title, author, upvotes }) => {
  return (
    <div className="image-box">
      <h2>{month}</h2>
      <h3>{title}</h3>
      <img src={imageSrc} alt={altText} />
      <div className="image-footer">
        <span id='author'>{author}</span>
        <span id='upvotes'>{upvotes}</span>
      </div>
    </div>
  );
};

export default ImageBox;