import React from 'react';

function Button({handleClick}) {
    return(
        <button
            onClick={handleClick}
        >
            Make API Call Again
        </button>
    )
}

export default Button