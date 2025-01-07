// src/components/Header/Header.jsx

import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Indulge in deliciousness crafted to perfection, delivered fresh to satisfy your cravings</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header