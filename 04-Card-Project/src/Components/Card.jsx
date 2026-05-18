import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
      <div className="card">

        <div>
        {/* Top Section */}
        <div className="top">
          {/* <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="Amazon logo" /> */}
          <img src={props.logo} alt=" logo" />
          <button>Save <Bookmark size={12} /></button>
        </div>
        
        {/* Center Section */}
        <div className="center">
          <h3>{props.company} <span>{props.dpo}</span></h3>
          <h2>{props.Post}</h2>
          <div className='tag'>
            <h4>{props.Tag1}</h4>
            <h4>{props.Tag2}</h4>
          </div>
        </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom">
            <div>
              <h3>{props.Pay}</h3>
              <p>{props.Location}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
