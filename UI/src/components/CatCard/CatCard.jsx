import React from 'react'
import "./CatCard.scss"
import { Link } from 'react-router-dom'

function CatCard({item}) {
  return (
    <Link to="/gigs?cat=">
      <div className="catCard">
          <div className="container">
              <img src={item.img} alt="" />
              <span className='desc'>{item.desc}</span>
              <span className='title'>{item.title}</span>
          </div>
      </div>
    </Link>
  )

}

export default CatCard