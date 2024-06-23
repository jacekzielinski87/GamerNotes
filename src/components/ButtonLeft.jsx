// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ButtonLeft = ({children, onClick}) =>  {
    
    return (
        <button onClick={onClick} className="w-14 h-14 bg-blue-500 text-white font-code rounded-full hover:bg-blue-400 cursor-pointer" >
            {children}
            <p className="text-sm">Add game</p>
        </button>
    )
}

export default ButtonLeft;
