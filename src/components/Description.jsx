import React from 'react'

const Description = (props) => {
  return (
  <>
    <h1 className='title'>{props.text1}</h1>
    <p className='desc'>{props.text2}</p>
  </>
  )
}

export default Description