import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent" >
     <Card user = 'Ziyan Mansuri' age = {25} />
     <Card user = 'Zaid Mansuri' age = {30}/>
    </div>
    
  )
}
export default App