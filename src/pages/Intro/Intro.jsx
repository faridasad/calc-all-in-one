import React from 'react'
import "./intro.scss"
import {Link} from "react-router-dom"
import Header from '../../components/Header/Header'

function Intro() {
  return (
    <div className='intro'>
      <Header />
      <div className="intro-wrapper">
        <Link to="/css-units"><div className="link-con"><h1>CSS UNITS</h1><p>Convert Css stuff</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h1>NEXT CALC</h1><p>COMING SOON</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h1>NEXT CALC</h1><p>COMING SOON</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h1>NEXT CALC</h1><p>COMING SOON</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h1>NEXT CALC</h1><p>COMING SOON</p></div></Link>
        <Link to="/css-units"><div className="link-con"><h1>NEXT CALC</h1><p>COMING SOON</p></div></Link>
      </div>
    </div>
  )
}

export default Intro