import React from 'react'
import './SearchBar.scss'

export const SearchBar = () => (
  <form className='searchBar'>
    <input className='searchInput' type='text' placeholder='Search' />
    <button className='searchButton'>GO</button>
  </form>
)

export default SearchBar
