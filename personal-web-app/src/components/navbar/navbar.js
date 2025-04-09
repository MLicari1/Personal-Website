import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'


import './navbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <ul className='nav-menu'>
                <li>Family</li>
                <li>Hobbies</li>
            </ul>
            <div className='hamburger' onClick={handleNav}>
                {nav ? (<AiOutlineClose className='icon dark'/>) : (<HiOutlineMenuAlt4 className='icon' />)}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <li>Home</li>
                    <li>Pets</li>
                    <li>Hobbies</li>
                </ul>
                <div className='mobile-menu-bottom'>
                    <div className='menu-icons'>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='social-icons'>
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar