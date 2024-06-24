import ButtonRight from "./ButtonRight";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
function RightWrapper ({onClick}) {

    const [game, setGame] = useState('');

    function deleteGame () {
        event.preventDefault();
        console.log(setGame)
       }


  return (
    <>
    <aside className="flex justify-center items-start">
        <div className="p-6">
            <ButtonRight onClick={onClick}/>    
        </div>
    </aside>
    <div className="flex justify-center items-end">
        <input type='text' required value={game} onChange={(e) => setGame(e.target.value)} className="w-10 h-6"/> 
    </div>
        <div className="bg-red-500 h-1/2 w-80 absolute top-60 right-20 rounded-lg">
            {game}
        </div>
        
    </>
  );
}

export default RightWrapper;
