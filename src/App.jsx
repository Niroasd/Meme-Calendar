import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
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
