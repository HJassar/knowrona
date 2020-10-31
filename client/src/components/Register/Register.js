import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
    return (
        <>
            <div className='container'>
                <form className='registration-form'>
                    <div className='form-group'>
                        <input className='form-group__input'
                            type='email'
                            placeholder='Email Address'
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input className='form-group__input'
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={handleUsername}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input className='form-group__input'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={handlePassword}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input className='form-group__input'
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <button className='primary-btn'>Register</button>
                    </div>
                    <p className='Register__paragraph'>
                        Already have an account? <Link className='Register__link' to='/login'>Log In</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Register;
