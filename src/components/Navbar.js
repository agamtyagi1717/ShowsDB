import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <nav className='navbar_nav'>
                <h3 className='navbar_nav_links'>
                    <Link to="/">
                        <img alt="logo" className='logo' src="./favicon.png"></img>
                        <h3>ShowsDB</h3>
                    </Link>
                </h3>

                <ul className='nav_links'>
                    <li className='link_links'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='link_links'>
                        <Link to={'https://agamtyagi1717.github.io/digital-businesscard/'}>Agam Tyagi</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar