import '../../App.css';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import DropdownMenu from './DropdownMenu';
import React, { useState } from 'react';

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
  
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};
  
const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

const Navigation = () => {
  return (
    <Navbar>
      <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/'}>Home</Link></li>
      <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/forms'}>Forms</Link></li>
      <li className='list-none m-5 text-xl hover:text-slate-500 menu-item bar-item'><Link to={'/game'}>Game</Link></li>

      <NavItem icon={<MdMenu/>} className='menu-item'>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
};

export default Navigation;