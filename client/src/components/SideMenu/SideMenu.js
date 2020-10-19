import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { connect } from 'react-redux';
import { toggleProfileHidden } from '../../redux/profile/profile.actions';
import './SideMenu.css';

const SideMenu = ( { toggleProfileHidden }) => {
  return (
    <div className='SideMenu'>
      <div className='SideMenu__img'>
        <FontAwesomeIcon 
          className='SideMenu__img-close' 
          onClick={toggleProfileHidden}
          icon={faTimes} />
        <ProfileIcon />
      </div>
      <ul>
        <li className='SideMenu__item'>Batman</li>
        <li className='SideMenu__item'>Edit Profile</li>
        <li className='SideMenu__item'>LogOut</li>
        <li><Link className='SideMenu__link' to='/home'>Home</Link></li>
        <li className='SideMenu__item'>Qbank</li>
        <li className='SideMenu__item'>Admin Dash</li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden())
})
export default connect(null, mapDispatchToProps)(SideMenu);