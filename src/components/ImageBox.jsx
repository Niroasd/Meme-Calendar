import React from 'react';
import './ImageBox.css';

const ImageBox = ({ title, imageSrc, author, upvotes }) => {
  return (
    <div className="image-box">
      <h3>{title}</h3>
      <img src={imageSrc} />
      <div className="image-footer">
        <span id='author'>u/{author}</span>
        <span id='upvotes'>{upvotes}</span>
      </div>
    </div>
  );
};

export default ImageBox;