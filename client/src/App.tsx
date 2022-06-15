import axios from 'axios'
import './App.css'

function App() {
  return (
    <div className='App'>
      <button type='button' onClick={getApiData}>get</button>
    </div>
  )
}

const getApiData = () => {
  axios
    .get('/api/data')
    .then(res => {
      console.log(res)
    })
}

export default App
