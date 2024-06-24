// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ButtonRight = ({children, onClick}) =>  {
    
    return (
        <button onClick={onClick} className="w-14 h-14 bg-red-500 text-white font-code rounded-full hover:bg-red-600 cursor-pointer" >
            {children}
            <p className="text-sm">Delete game</p>
        </button>
    )
}

export default ButtonRight;
