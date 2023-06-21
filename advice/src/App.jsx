
import{useState,useEffect}from'react'
import './App.css'
import'./Medias.css'

const App=()=> {

  const[adviceid,setdviceid]=useState(' ')
  const[advice,setAdvice]=useState(' ')


  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((response)=>response.json())
    .then((data)=>{
      setAdvice(data.slip.advice);
      setdviceid(data.slip.id)
    })
  })
  return (
    
      <main>
        <div className='container'>
            <h3 className='title'>Advice <span className='id'> #{adviceid}</span> </h3>
            <q className='advice'>{advice}</q>
        </div>
      </main>
    
  )
}

export default App
