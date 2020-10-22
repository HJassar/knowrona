import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = (props) => {
    let sendEmail = props.sendEmail;
    if (sendEmail) {
        return <Message />;
    }
    return <ForgetPasswordInput sendEmail={false} />;
};

const ForgetPasswordInput = (props) => {
    const [email, setEmail] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const switchToMessage = (e) => {
        if (email) {
            props.sendEmail = true;
        } else {
            props.sendEmail = false;
        }
        e.preventDefault();
    };
    return (
        <>
            <div className='container'>
                <h1>Forgot Password</h1>
                <form>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Email Address'
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                        <div className='form-group'>
                            <button onClick={switchToMessage}>Send</button>
                            <Link to='/Login'>
                                <button>Cancel</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

const Message = () => {
    return <h1>An email has been sent!</h1>;
};

export default ForgetPassword;
