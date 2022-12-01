import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import loginPic from '../../static/login.png';
import sadFace from '../../static/sadFace.png';
import Login from './login';
import SignUp from './signup';
import UserError from './userError';
import * as actions from '../../actions/action-creators';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      signInUser: data => dispatch(actions.signInUser(data)),
      signUpUser: data => dispatch(actions.signUpUser(data)),
      updateCredentials: () => dispatch(actions.invalidCredentialsActionCreator())
    }
  }

const Auth = (props) => {
    // useing useForm React hook getting data from the form
    const {register, handleSubmit, formState: { errors } } = useForm();
    const [needsSignUp, setSignUp] = useState(false);

    const {status, message} = useSelector(state => state.users.invalidCredentials);
    console.log(status, message);
    
    // function for handling data from the form for user authentification
    const onLogin = data =>  {
        props.signInUser(data);
    }

    // function for handling data from the from for user authorization
    const onSignUp = data => {
        props.signUpUser(data);
    }

    // function to switch between sign up and log in
    const handleSetSignUp = () => {
        console.log('inside a handlesignup')
        const newNeedsSignUp = needsSignUp ? false : true;
        setSignUp(newNeedsSignUp);
    }

    const handleErrorUser = str => {
        let newNeedsSignUp = str === 'login' ? false : true;
        setSignUp(newNeedsSignUp);
        props.updateCredentials();
    }

    // Text for the button
    const textForButton = needsSignUp ? "Log in" : "Sign up";

    return (
        <>
            <main className="auth">
                {!status && !needsSignUp &&
                <Login register={register} 
                    loginPic={loginPic} 
                    handleSubmit={handleSubmit} 
                    onLogin={onLogin} />
                } 
                {!status && needsSignUp &&
                <SignUp register={register}
                        loginPic={loginPic}
                        handleSubmit={handleSubmit}
                        onSignUp={onSignUp}
                />
                }
                {status && <UserError 
                            message={message}
                            sadFace={sadFace}
                            />}
            </main>
            <div className="switch-form">
                {status && 
                  <div className="error-buttons">
                    <button onClick={() => handleErrorUser('login')}>Log in </button>
                    <button onClick={() => handleErrorUser('signup')}>Sign up</button>
                  </div>
                }
                {!status && !needsSignUp && <p>Don't have an account?</p>}
                {!status && needsSignUp && <p>Already have an account?</p>}
                {!status && <button id="switch-sign" onClick={() => handleSetSignUp()}>{textForButton}</button>}
            </div>
        </>
    );
}

export default connect(null, mapDispatchToProps)(Auth);