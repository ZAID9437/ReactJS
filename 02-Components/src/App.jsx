import Card from "./Components/Card"
import navbar from "./Components/navbar"

const App = () => {
  // const user = 'Zaid Mansuri'
  // const age = 19
  return (
    
    <div>
      {navbar()} <br />
      {navbar()}
      {Card()}
      {Card()}
      {/* <div className="card">
        <h1>Zaid</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, facilis!
        </p>
      </div> */}
      {/* <Card /> <br />  */}
      

      {/* <h1>Hello, Guys I AM {user}</h1>
      <h1>And I Am {age} Year Old</h1> */}

  

     
    </div>
  )
}

export default App
