import React from 'react'
import banner from "../assets/img/banner.jpg"

function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <div className="content">
          <h1>Chez vous, partout et ailleurs</h1>

          <img src={banner} alt="Beach" width="1240" height="223"/>
        </div>
      </div>
    </section>
  )
}

export default Banner