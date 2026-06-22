import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  // async function getData(){
  //  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  console.log(response)
  // }

  // const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   console.log(data)
  
  // }

  //  const getData = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(response)
  
  //  }

  const getData = async() => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello {elem.author}{idx + 1}</h3>
        })}
      </div>
    </div>
  )
}

export default App


// The await keyword pauses the execution of an async function until a Promise is resolved.
// The async keyword makes a function asynchronous and automatically returns a Promise.
