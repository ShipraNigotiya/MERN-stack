import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/contact">Contact Us</Link>
      <Link href="/about">About US</Link>
      <h1 style={{ color: 'red',fontSize : '5rem'}}>My Home Page </h1>
      <br />
      <hr />     
      <input type="text" />
      <button className='my-btn'>Submit</button>
    </div>
  )
}

export default Home


