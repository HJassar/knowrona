import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <input
                            type='email'
                            placeholder='Email Address'
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={handleUsername}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={handlePassword}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <button className='btn-primary'>Register</button>
                    </div>
                    <p>
                        Already have an account? <Link to='/login'>Log In</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Register;
