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
          <img src='https://www.svgrepo.com/show/307453/whale-tail-wild-wildlife-big.svg'/>
          <p>Tails</p>
        </div>
        : 
        <div>
          <img src='https://www.svgrepo.com/show/484092/head.svg'/>
          <p>Heads</p>
        </div>
        )}  
      </button>
    </>
  )
}

export default App
