import '../../App.css';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import DropdownMenu from './DropdownMenu';
import React, { useState } from 'react';
  
const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
};
  
const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <button className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}
    </li>
  );
};

const Navigation = ({ user }) => {
  return (
    <Navbar>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Home</Link></li>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Profile</Link></li>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/daygame'}>Daily Game</Link></li>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/contgame'}>Infinite Game</Link></li>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/forms'}>Login/Sign Up</Link></li>
      {user && <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/logout'}>Logout</Link></li>}
      <NavItem icon={<MdMenu/>} className='menu-item'>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
};

export default Navigation;