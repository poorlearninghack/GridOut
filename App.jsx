import { useState } from 'react'
import './App.css'

function App() {
  const grid=new Array(2500).fill(null);
  const [color,setColor]=useState(Array(2500).fill("white"));


  const changeColor=(j)=>{
    const Newcolor=[...color];
    Newcolor[j]="black";
    setColor(Newcolor);
  }

  return (
    <div className='PixelGrid'>
      {grid.map((_,i)=>(
        <div style={{backgroundColor:color[i]}} className='Pixel' onClick={()=>changeColor(i)}/>
      ))}
    </div>
  )
}

export default App
