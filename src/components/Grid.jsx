import React from 'react'
import Flat from './Flat'

function Grid() {
  return (
    <section className='grid'>
      <div className="container">
        <div className="content">
          <Flat />
          <Flat />
          <Flat />
          <Flat />
          <Flat />
          <Flat />
        </div>
      </div>
    </section>
  )
}

export default Grid