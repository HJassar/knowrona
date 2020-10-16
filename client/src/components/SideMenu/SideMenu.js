import React from 'react';
import { Link } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { connect } from 'react-redux';
import { toggleProfileHidden } from '../../redux/profile/profile.actions';
import './SideMenu.css';

const SideMenu = ( { toggleProfileHidden }) => {
  return (
    <div className='SideMenu'>
      <div className='SideMenu__img'>
        <p className='SideMenu__img-close' onClick={toggleProfileHidden}>X</p>
        <ProfileIcon />
      </div>
      <p className='SideMenu__item'>Batman</p>
      <p className='SideMenu__item'>Edit Profile</p>
      <p className='SideMenu__item'>LogOut</p>
      <hr  className='SideMenu__breakline'/>
      <br/>
      <Link className='SideMenu__link' to='/home'>Home</Link>
      <p className='SideMenu__item'>Qbank</p>
      <p className='SideMenu__item'>Admin Dash</p>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden())
})
export default connect(null, mapDispatchToProps)(SideMenu);