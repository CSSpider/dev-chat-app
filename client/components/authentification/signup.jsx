import React from 'react';

const SignUp = ({loginPic, onSignUp, register, handleSubmit}) => {
    return (
        <>
            <div>
                <h1 className="title-auth-form">Sign Up</h1>
                <img src={loginPic} />
            </div>
            <form onSubmit={handleSubmit(onSignUp)} className="login-form">
                <input placeholder="Username..." className="auth-input" {...register("username", { required: true })} name="username" type="text" />
                <input placeholder="Email..." className="auth-input" {...register("email", { required: true })} name="email" type="email" />
                <input placeholder="First Name..." className="auth-input" {...register("firstName", { required: true })} name="firstName" type="text" />
                <input placeholder="Last Name..." className="auth-input" {...register("lastName", { required: true })} name="lastName" type="text" />
                <input placeholder="Password..." className="auth-input" {...register("password", { required: true })} name="password" type="password" />
                <input className="auth-input" type="submit" />
            </form>
        </>
    )
}

export default SignUp;