import React from 'react'
import { IndexLink } from 'react-router'

import NavLink from '../NavLink'
import SearchBar from '../SearchBar'

import logo from '../../routes/Piecewise/assets/logo.png'
import './Navbar.scss'

export const NavBar = () => (
  <div className='navwrapper'>
    <nav className='navbar'>
      <IndexLink className='navitem' id='navlogo' to='/'>
        <img className='navlogoimg' src={logo} />
      </IndexLink>
      <SearchBar className='navitem' />
      <NavLink className='navitem' to='/courses'>Courses</NavLink>
      <NavLink className='navitem' to='/notifications'>Notifications</NavLink>
      <NavLink id='test' className='navitem' to='/account'>Account</NavLink>
    </nav>
  </div>
)

export default NavBar
