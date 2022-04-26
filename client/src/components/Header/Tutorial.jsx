import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
          <div className='tutorial'>
            <h1 className='tut-header'>How To Play</h1>
            <ul className='instructions'>
              <li>- The goal of the game is to guess the five-letter word by typing guesses.</li>
              <li>-With each guess, you will be given feedback on each letter, telling you if you are close or not.</li>
              <li>-When a letter is highlighted in green, you got that letter right! It is the correct letter in the correct place.</li>
              <li>- When a letter is highlighted in yellow, you are on the right track. That letter is in the word, just not in the right spot.</li>
              <li>- When a letter is grey, you can cross it off. That letter isn't found anywhere in the word.</li>
              <li>- See if you can guess the word in as few guesses as possible!</li>
            </ul>
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