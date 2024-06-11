import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/residentsCard.css'

const ResidentsCard = ({info, index}) => {

   const [residents, getResidents] = useFetch()
    useEffect(() => {
      getResidents(info)
    }, [])
    
    console.log('info')
  return (
    <article className='residentcard'>
        <figure className='residentcard-img'>
            <img src={residents?.image} alt="character image" />
            <figcaption  className='residentcard-status'>
                <div className= {`residentcard-circle ${residents?.status}`}></div>
                <span>{residents?.status}</span>
            </figcaption>
        </figure>
        <h2 className='residentcard-name'>{residents?.name}</h2>
        <hr className='residentcard-separator'/>
        <ul className='residentcard-list'>
            <li className='residentcard-item'><span>Species :</span> <span>{residents?.species}</span></li>
            <li className='residentcard-item'><span>Origin :</span> <span>{residents?.origin.name}</span></li>
            <li className='residentcard-item'><span>Eppisodes where appear :</span>  <span> {residents?.episode.length}</span></li>
        </ul>
    </article>
  )
}

export default ResidentsCard