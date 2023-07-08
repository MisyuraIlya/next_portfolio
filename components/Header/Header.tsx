import React from 'react';
import Navigation from '../Navigation/Navigation';

const navItems = [
    {label: "Home", href:'/'},
    {label: "About", href:'/about'},
    {label: "Services", href:'/services'},
    {label: "Portfolio", href:'/portfolio'},
    {label: "Contact", href:'/contact'},
]

const Header = () => {
    return (
        <header className='header fixed top-0 left-0 w-full flex justify-between items-center pt-10 px-24 bg-transparent'>
            <h4 className='logo'>Hello</h4>
            <Navigation navLinks={navItems}/>
        </header>
    );
};

export default Header;