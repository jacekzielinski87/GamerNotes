import Gameboy from './assets/gameboy.jpg';
import './App.css'
import LeftWrapper from './components/LeftWrapper';
import RightWrapper from './components/RightWrapper';





function App() {

const handleClick = (e) => {
    e.preventDefault();
    console.log("Add");    
  };

  return (
     <>
     <div className="bg-[url('assets/Bg.jpg')] flex justify-center">
        <LeftWrapper onClick={handleClick}/>
        <img src={Gameboy} alt='Photo of Gameboy Console' className='w-1/2'></img>
        <RightWrapper onClick={handleClick}/>
    </div>
    </>
    )
}

export default App
