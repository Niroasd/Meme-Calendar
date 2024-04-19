import React from 'react';
import './MainContent.css';
import ImageBox from './ImageBox'

const imageBoxesData = [
  { id: 1, month: 'January', imageSrc: 'january.jpg', altText: 'January meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 2, month: 'February', imageSrc: 'february.jpg', altText: 'February meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 3, month: 'March', imageSrc: 'march.jpg', altText: 'March meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 4, month: 'April', imageSrc: 'april.jpg', altText: 'April meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 5, month: 'May', imageSrc: 'may.jpg', altText: 'May meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 6, month: 'June', imageSrc: 'june.jpg', altText: 'June meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 7, month: 'July', imageSrc: 'july.jpg', altText: 'July meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 8, month: 'August', imageSrc: 'august.jpg', altText: 'August meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 9, month: 'September', imageSrc: 'september.jpg', altText: 'September meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 10, month: 'October', imageSrc: 'october.jpg', altText: 'October meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 11, month: 'November', imageSrc: 'november.jpg', altText: 'November meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
  { id: 12, month: 'December', imageSrc: 'december.jpg', altText: 'December meme', title: 'title', author: 'u/user', upvotes: '23,6k' },
];

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="image-box-container">
          {imageBoxesData.map((box) => (
            <ImageBox
            key={box.id}
            month={box.month}
            title={box.title}
            // imageSrc={box.imageSrc}
            imageSrc={'src/assets/dummy.webp'}
            altText={box.altText}
            author={box.author}
            upvotes={box.upvotes}
            />
          ))}
        </div>
    </main>
  );
};

export default MainContent;
