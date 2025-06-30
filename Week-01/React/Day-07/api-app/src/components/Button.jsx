import React, { useState } from 'react'
import "../styles/Button.css"

const Button = ({
    type= 'outline',
    onClick,
    text='Button'
}) => {
  return (
    <button className={`main-button button-${type}`} onClick={onClick}>{text}</button>
  )
}

export default Button