import React from 'react'

const Navbar = (props) => {
    function changeTheme(){
        // console.log('Theme Changed',props.theme)
        props.setTheme('Dark')
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
