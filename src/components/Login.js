import { IconButton } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import './Login.css';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { useHistory } from 'react-router';
import { auth } from '../firebase'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [signUp, setSignUp] = useState(false);
    const dispatch = useDispatch();


    function SignIn(e) {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            dispatch(login({
                email: user.email,
            }));
            console.log(user);
        }).catch(error => alert(error.message));


        history.push('/');
    }

    function SignUp(e) {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
           dispatch(login({
               email: authUser.email,
           }))
        }).catch(error => alert(error.message));

        history.push('/');
    }
    return (
        <>
        {!signUp ? (
        <div className="login">
            <IconButton>
                <KeyboardReturnIcon 
                    className="login__return"
                    onClick={() => history.push('/')}
                />
            </IconButton>
            <div className="login__body">
                <h2>Sign In</h2>
                <form className="login__form">
                    <input 
                        type="text" 
                        className="login__email"
                        placeholder="Email"
                        ref={emailRef}
                    />
                    <input 
                        type="password" 
                        className="login__password"
                        placeholder="Password"
                        ref={passwordRef}
                    />
                    <button className="login__signIn" onClick={SignIn}>Sign In</button>
                </form>
                <p>
                    <span className="first">You are new?</span>
                    <span className="last" onClick={() => setSignUp(true)}> Sign up.</span>
                </p>
            </div>
        </div>
        ) : (
            <div className="login">
                <IconButton>
                    <KeyboardReturnIcon 
                        className="login__return"
                        onClick={() => history.push('/')}
                    />
                </IconButton>
                <div className="login__body">
                    <h2>Sign In</h2>
                    <form className="login__form">
                        <input 
                            type="text" 
                            className="login__email"
                            placeholder="Email"
                            ref={emailRef}
                        />
                        <input 
                            type="password" 
                            className="login__password"
                            placeholder="Password"
                            ref={passwordRef}
                        />
                        <button className="login__signIn" onClick={SignUp}>Sign Up</button>
                    </form>
                    <p>
                        <span className="first">You already have an account?</span>
                        <span className="last" onClick={() => setSignUp(false)}> Sign in.</span>
                    </p>
                </div>
            </div>            
        )}

        </>
    )
}

export default Login
