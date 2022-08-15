import React from 'react'
import './app.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CssUnits from './pages/CssUnits/CssUnits';
import Intro from './pages/Intro/Intro';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bmi from './pages/BMI/Bmi';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Intro />}/>
          <Route path='/css-units' element={<CssUnits />} />
          <Route path='/bmi-calculator' element={<Bmi />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App