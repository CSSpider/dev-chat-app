import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import loginPic from '../static/login.png';

const Auth = (props) => {
    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>  console.log(data);

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

export default Auth;