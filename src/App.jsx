import { useEffect, useState } from 'react'
import Coin from './Coin'

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
      {loading ? <h1>Loading...</h1> : <h1>Click the Coin To Flip Again</h1>}
      <Coin getCoinFlip={getCoinFlip} yesNo={yesNo}/>
    </>
  )
}

export default App
