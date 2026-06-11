// import React, { useState } from 'react'

// const App = () => {


//   const [num ,setNum] = useState(20);
//   const [userName , setUserName] = useState("Zaid");
//   const [user , setUser] = useState([10, 20, 30]);

//   function changeNum(){
//     setNum(30)
//     setUserName("Ali")
//     setUser([40, 50, 60])
//   }

//   return (
//     <div>
//       <h1>Value Of Num Is {num} <br /> {user} <br /> User Name Is {userName}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
const App = () => {

  const [num ,setNum] = useState(0);

  function increaseNum(){
    setNum(num + 1)
  }

  function decreaseNum(){
    setNum(num - 1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button> 
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App
