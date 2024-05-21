import React from 'react'
import style from './Button.module.scss'
const Button = ({text, onClick}) => {
  return (
    <button style={style.buton} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button