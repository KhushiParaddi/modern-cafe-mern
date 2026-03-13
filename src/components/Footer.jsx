import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Modern Café</div>
      <div className="foot-note">123 Cozy Street — Open daily 8am–10pm</div>
    </footer>
  )
}
