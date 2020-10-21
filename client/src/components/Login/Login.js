import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    document.title = 'Knowrona | Login';

    // Stores the email in the email state
    const handleEmail = (e) => setEmail(e.target.value);

    // Stores the password in the password state
    const handlePassword = (e) => setPassword(e.target.value);
    return (
        <>
            <div className='container'>
                <div className='form-group'>
                    <input
                        type='text'
                        value={email}
                        onChange={handleEmail}
                        placeholder='Username or Email'
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
                    <button className='btn-primary'>Log In</button>
                </div>
                <p>
                    Don't have an account yet?{' '}
                    <Link to='/register'>Register here</Link>
                </p>
                <p>
                    <Link to='/forget-password'>Click Here</Link> to recover
                    your password
                </p>
            </div>
        </>
    );
};

export default Login;
