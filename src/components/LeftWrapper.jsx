import ButtonLeft from "./ButtonLeft";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
function LeftWrapper({onClick}) {

    const [game, setGame] = useState('');

    function addGame () {
        event.preventDefault();
        setGame(addGame);
       }

  return (
    <>
    <aside className="flex justify-start items-start">
        <div className="p-6" >
            <ButtonLeft onClick={onClick}/>
        </div>
    </aside>
    <div className="flex justify-start items-end">
        <input type='text' required value={game} onChange={(e) => setGame(e.target.value)} className="w-10 h-6"/> 
    </div>
    <div className="bg-blue-500 h-1/2 w-80 absolute top-60 left-20 rounded-lg">
        {game}
    </div>
    </>
  );
}

export default LeftWrapper;
