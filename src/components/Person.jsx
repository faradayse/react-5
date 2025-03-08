import React from 'react'

const Person =({name,img,age})=> {
  return (
    <div>
    <h2>{name}</h2>
    <img src={img} alt={name} width={200} />
    <p>{age}</p>
    </div>
  )
}

export default Person