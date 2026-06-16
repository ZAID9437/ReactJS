import React from 'react'

const App = () => {
 
  localStorage.setItem('User', 'Zaid Mansuri')
  localStorage.setItem('age', 19)

  const userr = localStorage.getItem('user')
  const age = localStorage.getItem('age')
  console.log(userr,age);

  localStorage.removeItem('user')

  const useer={
    username:'Zaid Mansuri',
    age:19,
    city:'Ahmedabad'
  }

  localStorage.setItem('user',JSON.stringify(useer))
  console.log(useer)

   const usser =  localStorage.getItem('user')
   const user =  JSON.parse(localStorage.getItem('user')
  )

   console.log(user)
   console.log(typeof(user))
  
  return (
    <div>
      
    </div>
  )

}

export default App
