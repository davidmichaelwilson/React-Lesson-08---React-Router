import React, {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import './Header.css'

function Header() {

  const [path, setPath] = useState(useLocation().pathname)

  return(
    <div className="header">
      <Link to="/" className="logo">Logo</Link>
      <div className="header-right">
        <Link className={path === "/" ? "active" : null} to="/">Home</Link>
        <Link className={path === "/contact" ? "active" : null} to="/contact">Contact</Link>
        <Link className={path === "/about" ? "active" : null} to="/about">About</Link>
      </div>
    </div>
  )
}

export default Header