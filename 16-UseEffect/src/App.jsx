import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

// const App = () => {
//     const [num, setNum] = useState(0)
//     const [num2, setNum2] = useState(100)
//     useEffect(function(){
//         console.log("UseEffect Is Running....!")
//         document.getElementById("UseEffect Is Running....!");
//     },[])
//   return (
//     <div>
//         <h1>Value Of Num 1 Is: {num}</h1>
//         <h1>Valur Of Num 2 Is: {num2}</h1>
//       <button  onMouseEnter={()=>{
//         setNum(num + 1)
//       }}
      
//       onMouseLeave={()=>{
//         setNum2(num2 + 10)
//       }}>Click</button>
//     </div>
//   )
// }

// export default App
const App = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    function aChanging(){
        console.log('A Ki Value Chnage Ho Gai')
    }
    
    function bChanging(){
        console.log('B Ki Value Chnage Ho Gai')
    }

    useEffect(function(){
      aChanging()
      console.log('Use Effect is Running...!')
  },[a])

    useEffect(function(){
        bChanging()
        console.log('Use Effect is Running...!')
    },[b])


  return (
    <div>
        <h1>A Is {a}</h1>
        <h1>B Is {b}</h1>
      <button
        onClick={()=>{
            setA(a+1)
        }}
      >Change A</button>
      <button
      onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
