import React from 'react'
import "./intro.scss"
import {Link} from "react-router-dom"
import Header from '../../components/Header/Header'

function Intro() {
  return (
    <div className='intro'>
      <div className="intro-wrapper">
        <Link to="/css-units"><div className="link-con"><h3>CSS UNITS</h3><p>Convert Css stuff</p></div></Link>
        <Link to="/bmi-calculator"><div className="link-con"><h3>BMI CALCULATOR</h3><p>Calculate your Body Mass Index</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h3>NEXT CALC</h3><p>COMING SOON</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h3>NEXT CALC</h3><p>COMING SOON</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h3>NEXT CALC</h3><p>COMING SOON</p></div></Link>
      </div>
    </div>
  )
}

export default Intro