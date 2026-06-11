import React from 'react'

const App = () => {
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" name="input" placeholder="Enter Your Name"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
