import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <div>HomePage Btween</div>
    <Link to="/product">
    <button className='btn'>Product Page</button>
    </Link>
    
    </>
  )
}

export {HomePage} 