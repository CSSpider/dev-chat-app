import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import loginPic from '../static/login.png';

const Auth = (props) => {
    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>  console.log(data);

    return (
        <main className="auth">
            <h4 className="title-auth-form">Log in </h4>
            <img src={loginPic} />
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input {...register("username", { required: true })} name="username" type="text" />
                <input {...register("email", { required: true })} name="email" type="email" />
                {errors.email && <span style={{ color: "red" }}>*Email* is mandatory </span>}
                <input  {...register("password", { required: true })} name="password" type="password" />
                <input type="submit" />
            </form>
        </main>
    );
}

export default Auth;