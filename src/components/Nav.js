import React, { useState } from 'react'

const Nav = () => {
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)


  return (
    <nav className={color ? 'navbar navbar_bg': 'navbar'}>
      <div className="container">
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left-logo">
              <img src="/Images/logo.PNG" alt="#" />
            </div>
          </ul>
          <ul className="navbar_right">
            <li>
              {' '}
              <a href="/" className={color ? 'a_colorchange': ""}> Home</a>
            </li>

            <li>
              {' '}
              <a href="/about" className={color ? 'a_colorchange': ""}> About</a>
            </li>
            <li>
              {' '}
              <a href="/skills"  className={color ? 'a_colorchange': ""}> Skills</a>
            </li>
            <li>
              {' '}
              <a href="/portfolio"  className={color ? 'a_colorchange': ""}> Portfolio</a>
            </li>
            <li>
              {' '}
              <a href="/contact"  className={color ? 'a_colorchange': ""}> Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
