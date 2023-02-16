import { useEffect, useState } from 'react'
import {GiDoubleDragon, GiReptileTail} from "react-icons/gi";


function App() {
  const [yesNo, setYesNo] = useState({})
  const [loading, setLoading] = useState(false)

  const getCoinFlip = () => {
    setLoading(true)
    try{
    fetch('https://yesno.wtf/api')
    .then(res => res.json())
    .then((res) =>{
      setYesNo(res)
      setLoading(false)
    })
    }
    catch(err){
      console.err(err)
      setLoading(false)
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
      {loading ? <h1>Loading...</h1> : <h1></h1>}
      {(yesNo.answer != 'no' ? 
        <div>
          <img src='https://www.svgrepo.com/show/307453/whale-tail-wild-wildlife-big.svg'/>
        </div>
        
        : 
        <div>
          <img src='https://www.svgrepo.com/show/484092/head.svg'/>
        </div>
        )}
      


    </>
  )
}

export default App
