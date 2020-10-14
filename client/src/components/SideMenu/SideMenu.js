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
      <p>Batman</p>
      <p>Edit Profile</p>
      <p>LogOut</p>
      <br/>
      <Link to='/home'>Home</Link>
      <p>Qbank</p>
      <p>Admin Dash</p>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden())
})
export default connect(null, mapDispatchToProps)(SideMenu);