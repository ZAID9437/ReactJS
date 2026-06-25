import { useState } from "react"
import Navbar from "./Components/Navbar"
import Button from "./Components/Button"

const App = () => {

  const [theme, seTheme] = useState("dark")

  return (
    <div>
      <Navbar theme={theme}/>
      <Button />
    </div>
  )
}

export default App

// Context Api need Three 
//1. Context (Create Context)
//2. Provider (Provide Context)
//3. UseContext 