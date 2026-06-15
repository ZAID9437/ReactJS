import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [task,setTask] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({
      title,
      content
    })

    setTask(copyTask)
    setTitle("")
    setContent("")
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form className='flex lg:w-1/2 items-start p-10 justify-between' onSubmit={(e) =>{
        handleSubmit(e)
        }}>

        <div className='flex w-1/2 flex-col items-start gap-4 '>
          <h1 className='text-4xl font-bold text-center p-5'>Add Notes</h1>
           
           {/* PEHLA INPUT FOR HEADING */}
          <input
          className='px-5 font-medium w-full py-2 border-5 rounded outline-none '
          type="text"
          placeholder="Enter Notes Heading..." 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          required />

            {/* DOOSRA INPUT FOR CONTENT */}
          <textarea
          type="text" 
          className='px-5 font-medium w-full h-32 flex items-start flex-row py-2 border-5 rounded outline-none' 
          placeholder="Enter Notes Content..." 
          value={content}
          onChange={(e)=>{
            setContent(e.target.value)
          }}
          required />

          <button className='bg-white active:bg-black font-medium w-full text-black px-5 py-2 rounded outline-none'>Add Notes</button>

        </div>

        <img className=' rotate-y-180 h-60' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>

        <h1 className='text-3xl font-bold text-center'>Recent Notes</h1>
        
        <div className='flex items-start gap-5 mt-5 flex-wrap h-[90%] overflow-auto'>
          
          {task.map(function(elem,idx){
            return <div key={idx} className='flex justify-between flex-col items-start h-52 w-40 rounded-2xl text-black pt-9 px-4 pb-4 bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1727363542746-e26716fc5e16?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXIlMjBub3RlfGVufDB8fDB8fHww)]'>
              <div>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-700'>{elem.content}</p>
              </div>
              <button onClick={() => deleteNote(idx)} className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold'>Delete</button>
            </div>

          })}

          {/* <div className='h-52 w-40 rounded-2xl bg-white '></div> */}
          
        </div>
      
      </div>
    
    </div>
  )
}

export default App
