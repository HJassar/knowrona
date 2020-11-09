import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../ProfilePicture/ProfilePicture';

const ConfirmLogin = (props) => {
    const [confirmLogin, setConfirmLogin] = useState('isLoggedInConfirmed');
    return (
        <div className='ConfirmLogin'>
            <button>
                <ProfilePic />
            </button>
            <small>
                <Link to='/login'>
                    (Not you?) Sign in with a different account.
                </Link>
            </small>
        </div>
    );
};

export default ConfirmLogin;
