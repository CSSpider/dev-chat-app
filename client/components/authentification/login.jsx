import React from "react";


const Login = ({loginPic, handleSubmit, onLogin, register}) => {
    return (
        <>
            <div>
                <h1 className="title-auth-form">Log in </h1>
                <img src={loginPic} />
            </div>
            <form onSubmit={handleSubmit(onLogin)} className="login-form">
                <input placeholder="Username..." className="auth-input" {...register("username", { required: true })} name="username" type="text" />
                <input placeholder="Password..." className="auth-input" {...register("password", { required: true })} name="password" type="password" />
                <input className="auth-input" type="submit" />
            </form>
        </>
    )
}

export default Login;