import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ImageBox from './components/ImageBox'

function App() {
  const [count, setCount] = useState(0)
  const imageBoxesData = [
    { id: 1, month: 'January', imageSrc: 'january.jpg', altText: 'January', description: 'Description for January' },
    { id: 2, month: 'February', imageSrc: 'february.jpg', altText: 'February', description: 'Description for February' },
    { id: 3, month: 'March', imageSrc: 'march.jpg', altText: 'March', description: 'Description for March' },
    { id: 4, month: 'April', imageSrc: 'april.jpg', altText: 'April', description: 'Description for April' },
    { id: 5, month: 'May', imageSrc: 'may.jpg', altText: 'May', description: 'Description for May' },
    { id: 6, month: 'June', imageSrc: 'june.jpg', altText: 'June', description: 'Description for June' },
    { id: 7, month: 'July', imageSrc: 'july.jpg', altText: 'July', description: 'Description for July' },
    { id: 8, month: 'August', imageSrc: 'august.jpg', altText: 'August', description: 'Description for August' },
    { id: 9, month: 'September', imageSrc: 'september.jpg', altText: 'September', description: 'Description for September' },
    { id: 10, month: 'October', imageSrc: 'october.jpg', altText: 'October', description: 'Description for October' },
    { id: 11, month: 'November', imageSrc: 'november.jpg', altText: 'November', description: 'Description for November' },
    { id: 12, month: 'December', imageSrc: 'december.jpg', altText: 'December', description: 'Description for December' },
  ];

  return (
    <div className="app">
      <Header />
      <div className="container">
        <MainContent />
        <div className="image-box-container">
          {imageBoxesData.map((box) => (
            <ImageBox
            key={box.id}
            imageSrc={box.imageSrc}
            altText={box.altText}
            description={box.description}
            name={box.month}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
