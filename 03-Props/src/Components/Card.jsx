import ZaidImg from '../assets/Zaid.jpg'
const Card = (props) => {
  return (
    <div className="card">
           {/* <img src={ZaidImg} alt="Zaid Mansuri" /> */}
           <h1>
                Name: {props.user} <br />
                Age: {props.age}
            </h1>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
           <button>View Profile</button>
    </div>
  )
}
export default Card