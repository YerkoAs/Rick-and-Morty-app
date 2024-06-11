import React from 'react'
import './styles/locationCard.css'
/* ----cambio---- */
const LocationCard = ({info}) => {
  console.log(info)
  return (
    <article className='location'>
      <h2 className='location-name'>{info?.results[0].name}</h2>
      <ul className='location-list'>
        <li className='location-item'><span>Type:</span> <span>{info?.results[0].type}</span></li>
        <li className='location-item'><span>Dimension:</span> <span>{info?.results[0].dimension}</span></li>
        <li className='location-item'><span>Population:</span> <span>{info?.results[0].residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationCard