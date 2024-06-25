import ButtonRight from "./ButtonRight";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
function RightWrapper ({onClick}) {

const [newItem, setNewItem] = useState('');

return (
    <>
    <aside className="flex justify-center items-start">
        <div className="p-6">
            <ButtonRight onClick={onClick}/>    
        </div>
    </aside>
    <div className="flex justify-center items-start">
        <input 
            type='text' 
            value={newItem} 
             onChange={(e) => setNewItem(e.target.value)} 
            className="w-40 h-10 absolute top-40 right-20"/> 
    </div>
        <div className="bg-red-500 h-1/2 w-80 absolute top-60 right-20 rounded-lg"></div>
        
    </>
  );
}

export default RightWrapper;
