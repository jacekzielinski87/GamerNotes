// eslint-disable-next-line no-unused-vars
import React from "react";


// eslint-disable-next-line react/prop-types
const ButtonRight = ({children, onClick}) =>  {

return (
    <button onClick={onClick} className="w-16 h-16 bg-red-500 text-white font-code rounded-full hover:bg-red-600 cursor-pointer m-32 text-sm" >
        {children}
        Delete game
    </button>
    )
}

export default ButtonRight;
