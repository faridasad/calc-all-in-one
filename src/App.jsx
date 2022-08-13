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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Intro />}/>
          <Route path='/css-units' element={<CssUnits />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App