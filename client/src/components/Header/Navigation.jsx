import '../../App.css';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

// const Navigation = () => {
//     return (
//         <nav>
//             <ul className='flex justify-end'>
//                 <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/'}>Home</Link></li>
//                 <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/forms'}>Forms</Link></li>
//                 <a className='list-none m-5 text-xl hover:text-slate-500'><MdMenu /></a>
//             </ul>
//         </nav>
//     )
// };

// const Menu = () => {
//     return (
//        <nav>
//            <ul>
//                <li>Hello!</li>
//                <li>Hello!</li>
//                <li>Hello!</li>
//            </ul>
//        </nav> 
//     )
// }

// export default Navigation;

function App() {
    return (
      <Navbar>
        <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/'}>Home</Link></li>
        <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/forms'}>Forms</Link></li>
  
        <NavItem>
          <DropdownMenu icon={<MdMenu/>}></DropdownMenu>
        </NavItem>
      </Navbar>
    );
  }
  
  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem
              goToMenu="animals">
              Scores/Leaderboard
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h2>General Settings</h2>
            </DropdownItem>
            <DropdownItem>Setting 1</DropdownItem>
            <DropdownItem>Setting 2</DropdownItem>
            <DropdownItem>Setting 3</DropdownItem>
            <DropdownItem>Setting 4</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h2>Your Scores</h2>
            </DropdownItem>
            <DropdownItem>High Scores</DropdownItem>
            <DropdownItem>Top Ranks</DropdownItem>
            <DropdownItem>Practice</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }
  
  export default App;