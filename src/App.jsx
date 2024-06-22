import Gameboy from './assets/gameboy.jpg';
import './App.css'

function App() {
 

  return (
     <>
      <div className="bg-[url('assets/Bg.jpg')] flex justify-center">
        <img src={Gameboy} alt='Photo of Gamaboy Console' className='w-1/2'></img>
        <p className='absolute bottom-3/4 text-white font-bebas text-4xl p-24'>Add games to your list</p>
      </div>
      </>
    )
}

export default App
