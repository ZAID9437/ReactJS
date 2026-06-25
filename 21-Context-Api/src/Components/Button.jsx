import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {

    const [theme,seTheme] = useContext(ThemeDataContext)

    const changeTheme = () =>{
        console.log('change Theme')
    }
  return (
    <div>
      <button onClick={changeTheme}>Chnage Theme {theme}</button>
    </div>
  )
}

export default Button
