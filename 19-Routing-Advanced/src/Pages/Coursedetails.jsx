import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetails = () => {

    const params = useParams()

  return (
    <div>
      <h1>{params.courseId} Course Detail's</h1>
    </div>
  )
}

export default Coursedetails
