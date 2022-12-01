import React from 'react';

const UserError = ({sadFace, message}) => {
    return (
        <>
            <h2 id="error-message">{message}</h2>
            <img id="sad-face" src={sadFace} />
        </>
    )
}

export default UserError;