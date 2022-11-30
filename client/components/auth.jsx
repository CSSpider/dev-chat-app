import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import loginPic from '../static/login.png';
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
    

    const onSubmit = data =>  {
        props.signInUser(data);
    }

    return (
        <main className="auth">
            <div>
                <h1 className="title-auth-form">Log in </h1>
                <img src={loginPic} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input className="auth-input" {...register("username", { required: true })} name="username" type="text" />
                <input className="auth-input" {...register("email", { required: true })} name="email" type="email" />
                <input className="auth-input" {...register("password", { required: true })} name="password" type="password" />
                <input className="auth-input" type="submit" />
            </form>
        </main>
    );
}

export default connect(null, mapDispatchToProps)(Auth);