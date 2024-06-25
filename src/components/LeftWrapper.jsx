import ButtonLeft from "./ButtonLeft";
import { useState } from "react";



// eslint-disable-next-line react/prop-types
function LeftWrapper({onClick}) {

const [newItem, setNewItem] = useState('');

return (
    <>
    <aside className="flex justify-start items-start">
        <div className="p-6" >
            <ButtonLeft onClick={onClick}/>
        </div>
    </aside>
    <div className="flex justify-start items-start"></div>
        <input 
            type='text' 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)}
            className="w-40 h-10 absolute left-20 top-40"/>
    <div className="bg-blue-500 h-1/2 w-80 absolute top-60 left-20 rounded-lg"></div>
    </>
  );
}

export default LeftWrapper;
