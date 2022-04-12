import * as React from 'react';
import './NavBar.css'

const Navbar = ()=>{
    return(
        <div className='navbar'>
            <ul className='ules'>
                <li className='choosen'>Explore</li>
                <li>Creators</li>
                <li>Community</li>
            </ul>
        </div>
    );
}

export default Navbar;