import React from 'react'
import Products from './component/Products'
const Home = () => {
  return (
    <div>
      <h1 className='heading'>Welcome redux toolkit store</h1>
      <section>
        <h3>Products</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home
