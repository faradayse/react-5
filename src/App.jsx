import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App =()=> {
  return (
    <div>
      <Person
      name='Trevor' 
      img ='https://media.istockphoto.com/id/1993983703/photo/themis-statue-of-justice-law-legal-system-justice-crime-concept-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=uzwqbRIyG6thqiidNQiUz10p0PuQ-l6iSbv9unU01tA=' 
      age={24}
       />
      <Product 
      name='I-phone'
      price=' Expensive' />
    </div>
  )
}

export default App