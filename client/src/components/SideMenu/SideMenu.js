import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { connect } from 'react-redux';
import { toggleProfileHidden } from '../../redux/profile/profile.actions';
import './SideMenu.css';

const SideMenu = ({ toggleProfileHidden }) => {
  // We declare node using the useRef hook in order to make the sidebar div programatically selectable. See https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82 for full solution.
  const node = useRef();

  // Adds a general event listener for a click upon mounting and removes it upon dismounting.
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
  // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // The following code detects if the click occured inside the SideMenu. If so, it just returns from the function.  If it was outside, it calls toggleProfileHidden() from the Redux action that has already been setup.
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    toggleProfileHidden();
  }

  return (
    <div className='SideMenu' ref={node}>
      <FontAwesomeIcon
        className='SideMenu__close'
        onClick={toggleProfileHidden}
        icon={faTimes} />

      <ProfileIcon />

      <div className='SideMenu__menu' >
        <div className='SideMenu__section'>
          <ul className='SideMenu__list'>
            <li className='SideMenu__item' onClick={toggleProfileHidden}>Batman</li>
            <li className='SideMenu__item' onClick={toggleProfileHidden}>Edit Profile</li>
            <li className='SideMenu__item' onClick={toggleProfileHidden}>LogOut</li>
          </ul>
        </div>
        <div className='SideMenu__section'>
          <ul className='SideMenu__list'>
            <li className='SideMenu__item' onClick={toggleProfileHidden}><Link className='SideMenu__link' to='/home'>Home</Link></li>
            <li className='SideMenu__item' onClick={toggleProfileHidden}>Qbank</li>
            <li className='SideMenu__item' onClick={toggleProfileHidden}>Admin Dash</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden())
})
export default connect(null, mapDispatchToProps)(SideMenu);