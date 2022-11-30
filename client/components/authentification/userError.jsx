import React from 'react';

const UserError = ({sadFace}) => {
    return (
        <>
            <h2 id="error-message">Invalid username or password</h2>
            <img id="sad-face" src={sadFace} />
        </>
    )
}

export default UserError;