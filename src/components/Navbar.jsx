import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo">Modern Café</div>
        <div className="tag">cozy. warm. tasty.</div>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
