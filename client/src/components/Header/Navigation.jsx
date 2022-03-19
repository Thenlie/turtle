import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Navigation = () => {
    return (
        <NavBar>
            <ul className='flex justify-end'>
                <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/'}>Home</Link></li>
                <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/forms'}>Forms</Link></li>
                <li className='list-none m-5 text-xl hover:text-slate-500'><NavBar /></li>
            </ul>
        </NavBar>
    )
};

function NavBar(props) {
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

export default Navigation;