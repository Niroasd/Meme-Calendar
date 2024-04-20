import React from 'react';
import './MainContent.css';
import ImageBox from './ImageBox';
import memeData from '../services/top_memes.json';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const year = 2024;

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="image-box-container">
        {months.map((month) => {
          const postData = memeData.find((data) => data.month === `${month} ${year}`);
          return (
            <div key={month}>
              <h2>{month}</h2>
              {postData ? (
                <ImageBox
                  title={postData.title}
                  imageSrc={postData.url}
                  author={postData.author}
                  upvotes={postData.score}
                />
              ) : (
                <ImageBox
                  title="Meme missing"
                  imageSrc="src/assets/missing.png"
                  author="missing"
                  upvotes="?????"
                />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MainContent;

