import React, { useState } from "react";


const Login = ({loginPic, handleSubmit, onSubmit, register}) => {
    return (
        <>
            <div>
                <h1 className="title-auth-form">Log in </h1>
                <img src={loginPic} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input placeholder="Username..." className="auth-input" {...register("username", { required: true })} name="username" type="text" />
                <input placeholder="Email..." className="auth-input" {...register("email", { required: true })} name="email" type="email" />
                <input placeholder="Password..." className="auth-input" {...register("password", { required: true })} name="password" type="password" />
                <input className="auth-input" type="submit" />
            </form>
        </>
    )
}

export default Login;