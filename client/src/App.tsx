import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ url, setUrl ] = useState('')
  
  const getApiData = () => {
    axios
      .get('/api/data',)
      .then(res => {
        console.log(res)
        setUrl(res.data)
      })
    }
    
    const getTest01 = () => {
      axios
      .get('/test/test01',)
      .then(res => {
        console.log(res)
        setUrl(res.data)
      })
    }
    
    const getTest02 = () => {
      axios
      .get('/test/test02',)
      .then(res => {
        console.log(res)
        setUrl(res.data)
      })
  }

  return (
    <div className='App'>
      <button type='button' onClick={getApiData}>api</button>
      <button type='button' onClick={getTest01}>test1</button>
      <button type='button' onClick={getTest02}>test2</button>
      <div>{url}</div>
    </div>
  )
}


export default App
