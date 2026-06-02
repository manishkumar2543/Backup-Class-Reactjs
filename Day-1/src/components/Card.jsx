import React from 'react'

const Card = ({data}) => {
  return (
    <div>
         <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <button>follow</button>
      </div>
    </div>
  )
}

export default Card