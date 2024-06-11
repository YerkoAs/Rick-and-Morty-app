import React from 'react'
import './styles/pages.css'

const Pages = ({page,setpage,total}) => {
    const handleLess = (num) => {
        if (page > num) {
            setpage(page - num )
        } else {
            setpage(total)
        }
    }

    const handlePlus = (num) => {
        if (page <= total-num) {
            setpage(page + num )
        } else {
            setpage(1)
        }
        
    }

  return (
    <div className='pages'>
        <button className='pages-btn' onClick = {() => {handleLess(5)}}>{'<<'}</button>
        <button className='pages-btn' onClick = {() => {handleLess(1)}}>{'<'}</button>
        <span className='pages-p'>{page} / {total} </span>
        <button className='pages-btn' onClick = {() => {handlePlus(1)}}>{'>'}</button>
        <button className='pages-btn' onClick = {() => {handlePlus(5)}}>{'>>'}</button>
    </div>
  )
}

export default Pages