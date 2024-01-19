import React from 'react'

type ButtonProps = {
  size: string,
  color: string,
  bgColor: string,
  text: string,
  borderRadius: string,
}

const Button = ({color, bgColor, text, borderRadius, size}: ButtonProps) => {
  
  return (
    <button className={`text-${size} p-2 hover:drop-shadow-xl`} type='button' style={{color:color,backgroundColor:bgColor, borderRadius:borderRadius}}>
      {text}
    </button>
  )
}

export default Button