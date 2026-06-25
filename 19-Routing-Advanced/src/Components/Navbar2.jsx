import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-wrap gap-2 py-2 px-5 bg-cyan-700'>
        <button onClick ={()=>{
          navigate('/')
        }} className='font-medium bg-amber-400 px-5 py-2 rounded cursor-pointer active:scale-95 w-50 h-10'>Return To Home</button>
        <button onClick ={()=>{
          navigate(-1)
        }} className='font-medium bg-amber-400 px-5 py-2 rounded cursor-pointer active:scale-95 w-50 h-10'>Back</button>
        <button onClick ={()=>{
            navigate(+1)
        }} className='font-medium bg-amber-400 px-5 py-2 rounded cursor-pointer active:scale-95 w-50 h-10'>Next</button>

      </div>
  )
}

export default Navbar2
