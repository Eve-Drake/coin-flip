import { useEffect, useState } from 'react'

function App() {
  const [yesNo, setYesNo] = useState({})

  const getCoinFlip = () => {
    fetch('https://yesno.wtf/api')
    .then(res => res.json())
    .then((res) =>{
      setYesNo(res)
    })
  }

  useEffect(()=>{
    getCoinFlip();
  },[])

  return (
    <>
      <button>Flip</button>
      <p>{yesNo.answer}</p>
    </>
  )
}

export default App
