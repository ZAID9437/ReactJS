import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState("")


  const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Form Submitted By: ", input)
      setInput("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input
            type="text" 
            name="input" 
            placeholder="Enter Your Name"
            value={input}
            onChange={(e)=>{
              setInput(e.target.value)
            }}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
