// eslint-disable-next-line no-unused-vars
import React from "react";


// eslint-disable-next-line react/prop-types
const ButtonLeft = ({children, onClick}) =>  {
    
return (
    <div>
        <button onClick={onClick} className="w-16 h-16 bg-blue-500 text-white font-code rounded-full hover:bg-blue-600 cursor-pointer p-1 m-32" >
            {children}
            <p className="text-sm">Add Game</p>
        </button>
    </div>
    )
}

export default ButtonLeft;
