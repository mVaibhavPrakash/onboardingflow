import React from 'react'
import Img from '../img/logo.png'
import '../css/logo.css'

const Logo = () => {
  return (
    <div className='logo'><img alt='logo' src={Img}/> Eden</div>
  )
}

export default Logo