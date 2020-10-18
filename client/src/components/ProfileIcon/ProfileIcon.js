import React from 'react'

import './ProfileIcon.css';
// import image from './batman.JPG';
import image from './profile-pic.png';

import { connect } from 'react-redux';
import { toggleProfileHidden } from '../../redux/profile/profile.actions';

const ProfileIcon = ({ }) => {
  return (
    <div className='ProfileIcon'>
      <img className='ProfileIcon-img' src={image} alt='Profile Picture' />
    </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIcon);