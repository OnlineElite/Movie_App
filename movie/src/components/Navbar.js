import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import '../MovieStyle.css'

function Navbar(){


    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className='navLink' to ='/' ><p className="navbar-brand" >MovieSeriesInfo</p></Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <FontAwesomeIcon className='icon2' icon="fa-brands fa-imdb" />   
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon className='icon1' icon="fa-brands fa-react" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;