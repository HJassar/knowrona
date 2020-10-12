import React from 'react'

import './ProfileIcon.css';
import image from './batman.JPG';
import { connect } from 'react-redux';
import { toggleProfileHidden } from '../../redux/profile/profile.actions';

const ProfileIcon = ({ hidden, toggleProfileHidden }) => {
  return (
    <div className='ProfileIcon'>
      <img className='ProfileIcon-img' onClick={hidden ? toggleProfileHidden : null} src={image} alt='Profile Picture' />
    </div>
  );
}

const mapStateToProps = state => ({
  hidden: state.profile.hidden
});

const mapDispatchToProps = dispatch => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIcon);