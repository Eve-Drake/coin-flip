import { useEffect, useState } from 'react'
import Coin from './Coin'

function App() {
  const [yesNo, setYesNo] = useState({})
  const [loading, setLoading] = useState(false)

  //for non api flip method
  const [headsOrTails, setHeadsOrTails] = useState('')

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


  //alternate method for 'coin flip'
  const getCoinflip2 = () =>{
    let random = Math.floor(Math.random() * 1001)
    if (random % 2 == 0){
      setHeadsOrTails('Heads')
    }
    else{
      setHeadsOrTails('Tails')
    }
  }

  useEffect(()=>{
    getCoinFlip();
  },[])
  return (
    
    <> 
      {loading ? <h1>Loading...</h1> : <h1>Click the Coin To Flip Again</h1>}
      <Coin getCoinFlip={getCoinFlip} yesNo={yesNo} headsOrTails={headsOrTails}/>
    </>
  )
}

export default App
