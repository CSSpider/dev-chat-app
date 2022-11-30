import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import loginPic from '../static/login.png'
import Login from './login';
import * as actions from '../actions/action-creators';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      signInUser: data => dispatch(actions.signInUser(data)),
    }
  }

const Auth = (props) => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const [needsSignUp, setSignUp] = useState(false);
    

    const onSubmit = data =>  {
        props.signInUser(data);
    }

    const handleSetSignUp = () => {
        console.log('inside a handlesignup')
        const newNeedsSignUp = needsSignUp ? false : true;
        setSignUp(newNeedsSignUp);
    }

    const textForButton = needsSignUp ? "Log in" : "Sign up";

    return (
        <>
            <main className="auth">
                {!needsSignUp &&
                <Login register={register} 
                    loginPic={loginPic} 
                    handleSubmit={handleSubmit} 
                    onSubmit={onSubmit} />
                } 
                {needsSignUp && console.log('here is going to be sign up')
                    // place for Sign Up form
                }
            </main>
            <div className="switch-form">
                {!needsSignUp && <h2>Don't have an account?</h2>}
                {needsSignUp && <h2>Already have an account?</h2>}
                <button onClick={() => handleSetSignUp()}>{textForButton}</button>
            </div>
        </>
    );
}

export default connect(null, mapDispatchToProps)(Auth);