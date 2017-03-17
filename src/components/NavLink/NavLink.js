import React from 'react'
import { Link } from 'react-router'
import './NavLink.scss'

export const NavLink = (props) => (
  <Link {...props} activeClassName='active' />
)

export default NavLink
