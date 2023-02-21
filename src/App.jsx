import { useEffect, useState } from 'react'

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
      <button onClick={()=>getCoinFlip()}>
            {(yesNo.answer != 'no' ? 
        <div>
          <p>Tails</p>
          <img src='https://www.svgrepo.com/show/307453/whale-tail-wild-wildlife-big.svg'/>
  
        </div>
        : 
        <div>
          <p>Heads</p>
          <img src='https://www.svgrepo.com/show/484092/head.svg'/>
        </div>
        )}  
      </button>
    </>
  )
}

export default App
