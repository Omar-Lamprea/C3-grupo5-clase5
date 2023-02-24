import React from 'react'
import './stylesCard.css'

const Card = ({productos}) => {

  const {imagen, nombre, precio} = productos
  return (
    <li className='card-li'>
      <h2>{nombre}</h2>
      <img src={imagen} />
      <h3>{precio}</h3>
    </li>
  )
}

export default Card