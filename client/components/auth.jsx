import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import loginPic from '../static/login.png'
import Login from './login';
import SignUp from './signup';
import * as actions from '../actions/action-creators';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      signInUser: data => dispatch(actions.signInUser(data)),
      signUpUser: data => dispatch(actions.signUpUser(data))
    }
  }

const Auth = (props) => {
    // useing useForm React hook getting data from the form
    const {register, handleSubmit, formState: { errors } } = useForm();
    const [needsSignUp, setSignUp] = useState(false);
    
    // function for handling data from the form
    const onLogin = data =>  {
        props.signInUser(data);
    }

    const onSignUp = data => {
        props.signUpUser(data);
    }

    // function to switch between sign up and log in
    const handleSetSignUp = () => {
        console.log('inside a handlesignup')
        const newNeedsSignUp = needsSignUp ? false : true;
        setSignUp(newNeedsSignUp);
    }

    // Text for the button
    const textForButton = needsSignUp ? "Log in" : "Sign up";

    return (
        <>
            <main className="auth">
                {!needsSignUp &&
                <Login register={register} 
                    loginPic={loginPic} 
                    handleSubmit={handleSubmit} 
                    onLogin={onLogin} />
                } 
                {needsSignUp &&
                <SignUp register={register}
                        loginPic={loginPic}
                        handleSubmit={handleSubmit}
                        onSignUp={onSignUp}
                />
                }
            </main>
            <div className="switch-form">
                {!needsSignUp && <p>Don't have an account?</p>}
                {needsSignUp && <p>Already have an account?</p>}
                <button onClick={() => handleSetSignUp()}>{textForButton}</button>
            </div>
        </>
    );
}

export default connect(null, mapDispatchToProps)(Auth);