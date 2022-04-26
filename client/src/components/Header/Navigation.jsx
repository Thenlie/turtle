import '../../App.css';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { MdHelpOutline } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Tutorial from './Tutorial.jsx';
  
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

const NavItem2 = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item2'>
      <button className='tut-icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      {open && props.children}
    </li>
  );
};

const Navigation = ({ user }) => {
  return (
    <Navbar>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Profile</Link></li>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Home</Link></li>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/daygame'}>Daily Game</Link></li>
      <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/contgame'}>Infinite Game</Link></li>
      {!user && <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/login'}>Login</Link></li>}
      {!user && <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/signup'}>Sign Up</Link></li>}
      {user && <li className='mobile-hide list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/logout'}>Logout</Link></li>}
      <NavItem2 icon={<MdHelpOutline className='q-mark'/>} className='menu-item'>
      <Tutorial></Tutorial>
      </NavItem2>
      <NavItem icon={<MdMenu/>} className='tut-item'>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
};

const DropdownMenu = ({ user }) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = (props) => {
    return (
      <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className='dropdown' ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'main'} timeout={500} classNames='menu-primary' unmountOnExit onEnter={calcHeight}>
        <div className='menu'>
        <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/profile'}>Profile</Link></li>
      <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Home</Link></li>
      <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/daygame'}>Daily Game</Link></li>
      <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/contgame'}>Infinite Game</Link></li>
      {!user && <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/login'}>Login</Link></li>}
      {!user && <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/signup'}>Sign Up</Link></li>}
      {user && <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/logout'}>Logout</Link></li>}
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'animals'} timeout={500} classNames='menu-secondary' unmountOnExit onEnter={calcHeight}>
        <div className='menu'>
          <DropdownItem>High Scores</DropdownItem>
          <DropdownItem>Top Ranks</DropdownItem>
          <DropdownItem>Practice</DropdownItem>
          <DropdownItem goToMenu='main'>Back</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navigation;