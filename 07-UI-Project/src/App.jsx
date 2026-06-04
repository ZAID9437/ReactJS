import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      color:'yellow',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://media.istockphoto.com/id/1368049990/photo/shot-of-a-businessman-walking-up-a-flight-of-stairs-against-an-urban-background.jpg?s=612x612&w=0&k=20&c=51d3U4crz5JQwNEWvo2lEaT937dFjc0RnW9G6X0UvyI=',
      color:'red',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://media.istockphoto.com/id/2220470068/photo/successful-professional-typing-on-laptop-working-intently-at-sleek-workspace-with-focused.jpg?s=612x612&w=0&k=20&c=DMZu0aND36yhZZQes5ZUogssFdBdNFMuXJpamrIPs8U=',
      color:'pink',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww',
      color:'blue',
      intro:'',
      tag:'Learn More'
    },
    {
      img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww',
      color:'black',
      intro:'',
      tag:'Display'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
