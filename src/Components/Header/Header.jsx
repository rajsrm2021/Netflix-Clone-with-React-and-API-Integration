import React from 'react'
import Logo from '../../Logonetflix.png'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
  return (
    <nav className="Header">
        <img src={Logo} alt="" />
        <div>
            <Link to="/tvShows">TV Shows</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/RecentlyAdded">Recently Added</Link>
            <Link to="/Mylist">My List</Link>
        </div>
        <ImSearch />
    </nav>
    
  )
}

export default Header