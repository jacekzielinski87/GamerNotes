import Gameboy from './assets/gameboy.jpg';
import './App.css'
import LeftWrapper from './components/LeftWrapper';
import RightWrapper from './components/RightWrapper';




function App() {

  const handleClick = () => {
    console.log("Click");
  };
 
return (
     <>
     <div className="bg-[url('assets/Bg.jpg')] flex justify-center">
        <LeftWrapper onClick={handleClick}/> 
          <img src={Gameboy} alt='Photo of Gamaboy Console' className='w-1/2'></img>
        <RightWrapper onClick={handleClick}/>
          <p className='absolute bottom-3/4 text-white font-bebas text-4xl p-24'>Add games to your list</p>
      </div>
      
      
      </>
    )
}

export default App
