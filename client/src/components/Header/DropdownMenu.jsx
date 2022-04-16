import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = () => {
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
          <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Home</Link></li>
          <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Profile</Link></li>
          <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/daygame'}>Daily Game</Link></li>
          <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/contgame'}>Infinite Game</Link></li>
          <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/login'}>Login</Link></li>
          <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/signup'}>Sign Up</Link></li>
          </div>
        </CSSTransition>
  
        <CSSTransition in={activeMenu === 'settings'} timeout={500} classNames='menu-secondary' unmountOnExit onEnter={calcHeight}>
          <div className='menu'>
            <DropdownItem>Setting 1</DropdownItem>
            <DropdownItem>Setting 2</DropdownItem>
            <DropdownItem>Setting 3</DropdownItem>
            <DropdownItem>Setting 4</DropdownItem>
            <DropdownItem goToMenu='main'>Back</DropdownItem>
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

  export default DropdownMenu;