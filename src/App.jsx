import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <div className="container">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App
