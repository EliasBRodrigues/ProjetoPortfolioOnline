import React from 'react'
import style from '../style/InputButton.module.css'

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className={style.button}>{children}</button>
    </div>
  )
}

export default Button
