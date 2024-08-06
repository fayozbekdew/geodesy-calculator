import React from 'react'
import EmptyImg from '../assets/no-data-6.svg'

function EmptyCard() {
  return (
    <div className='mt-11'>
        <img src={EmptyImg} className="w-full h-[400px]" alt="" />
    </div>
  )
}

export default EmptyCard