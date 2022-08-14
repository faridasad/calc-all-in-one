import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer>
        <div className="socials">
            <a href="https://www.github.com/faridasad" target="_blank"><span className='logo-footer github'><ion-icon name="logo-github"></ion-icon></span></a>
            <span className="bull">&bull;</span>
            <a href="https://www.linkedin.com/in/faridasadli/" target="_blank"><span className="logo-footer github"><ion-icon name="logo-linkedin"></ion-icon></span></a>
            <span className="bull">&bull;</span>
            <a href="https://www.instagram.com/faredsavage/" target="_blank"><span className="logo-footer instagram"><ion-icon name="logo-instagram"></ion-icon></span></a>
        </div>
    </footer>
  )
}

export default Footer