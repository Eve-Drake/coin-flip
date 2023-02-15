import { useEffect, useState } from 'react'
import {GiDoubleDragon, GiReptileTail} from "react-icons/gi";


function App() {
  const [yesNo, setYesNo] = useState({})

  const getCoinFlip = () => {
    try{
    fetch('https://yesno.wtf/api')
    .then(res => res.json())
    .then((res) =>{
      setYesNo(res)
    })
    }
    catch(err){
      console.err(err)
    }
  }

  useEffect(()=>{
    getCoinFlip();
  },[])

  return (
    <>      
    
    <button onClick={()=>getCoinFlip()}>
        <p className='bold'>{yesNo.answer ==='no'? 'Heads' : 'Tails'}</p>
        <p>Flip Again?</p>
      </button>

      {(yesNo.answer === 'no' ? 
        <div>
          <GiDoubleDragon size={500} alt='heads'/>
        </div>
        
        : 
        <div>
          <GiReptileTail size={500} alt='tails'/>
        </div>
        )}
      


    </>
  )
}

export default App
