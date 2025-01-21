import React from 'react'
import { Link } from "react-router-dom"

function Flat() {
  return (
    <Link to="/flat" className="flat-link">
      <div className="flat">
        <h2>Titre de la location</h2>
      </div>
    </Link>
  )
}

export default Flat