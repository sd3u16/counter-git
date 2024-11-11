import { useRef, useState } from 'react'

import './App.css'

function App() {
  
  const [counter,setCounter] = useState(0)
  
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handlePlusCounter = () =>{

    setCounter(rev=> rev+ Math.abs(Number(inputRef.current?.value)))
  }

  const handleMinusCounter = () =>{

    setCounter(rev=> rev - Math.abs(Number(inputRef.current?.value)))
  }
  

  return (
    <>
      <div className='countero'>
        
        <div className='count-number'>{counter}</div>



        <div className='btns'>
          <button onClick={handleMinusCounter} className='btn-minus'>-</button>
          
          <button onClick={handlePlusCounter} className='btn-plus'>+</button>
        </div>

        <div className='incre'>
          <p>Increment/Decrement by:</p> <input ref={inputRef} className='ino' type="number" min={1}  max={10} />
        </div>

        <button onClick={()=>setCounter(0)} className='reset'>Reset</button>
        </div>
    



    </>
  )
}

export default App
