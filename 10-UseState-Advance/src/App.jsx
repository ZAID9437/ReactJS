import React, { useState } from 'react'

// Object State Example
// 1. We cannot directly modify the object properties because it will not trigger a re-render.
// const App = () => {
//   const [num, setNum] = useState({user:'Zaid', age: 19})
//   const btnClicked = () => {
//     const newNum = {...num};
//     newNum.user = 'Zaid Mansuri';
//     newNum.age = 20;
//     setNum(newNum);
//   }
//   return (
//     <div>
//       <h1>{num.user}</h1>
//       <p>Age: {num.age}</p>
//       <button onClick={btnClicked}>Update</button>

//     </div>
//   )
// }

// export default App

// Array State Example 
// 2. We cannot directly push a new value to the array because it will not trigger a re-render.
// const App = () => {

//   const [num, setNum] = useState([10, 20, 30])

//   const btnClicked = () => {
//     const newNum = [...num]
//     newNum.push(99)
//     setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App

// 3. We can also use the functional form of the state updater to update the state based on the previous state.
const App = () => {
  const [num, setNum] = useState({user:'Zaid', age: 19})
  
  const btnClicked = () => {
    setNum(prev => ({...prev,age:50}))
  }
  return (
    <div>
      <h1>{num.user}</h1>
      <p>Age: {num.age}</p>
      <button onClick={btnClicked}>Update</button>
    </div>
  )
}

export default App
