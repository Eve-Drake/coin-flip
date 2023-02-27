import React from 'react'

const Coin = ({yesNo, getCoinFlip, headsOrTails}) => {
  return (
    <>
    <button onClick={()=>getCoinFlip()}>
            {(yesNo.answer != 'no' ? 
        <div>
          <img src='https://www.svgrepo.com/show/307453/whale-tail-wild-wildlife-big.svg'/>
          <h2>Tails</h2>
        </div>
        : 
        <div>
          <img src='https://www.svgrepo.com/show/484092/head.svg'/>
          <h2>Heads</h2>
        </div>
        )}  
    </button>

    {/**
     *  <button onClick={()=>getCoinFlip()}>
            {(headsOrTails != 'Heads' ? 
        <div>
          <img src='https://www.svgrepo.com/show/307453/whale-tail-wild-wildlife-big.svg'/>
          <h2>Tails</h2>
        </div>
        : 
        <div>
          <img src='https://www.svgrepo.com/show/484092/head.svg'/>
          <h2>Heads</h2>
        </div>
        )}  
    </button>
     */}
    </>
  )
}

export default Coin