




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Chest from './components/Chest'
import Footer from './components/Footer'
import Header from './components/Header'
import Neck from './components/Neck'
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Neck /><Chest /></>} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
