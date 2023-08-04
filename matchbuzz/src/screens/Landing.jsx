import React from 'react'
import "../App.css"
import Auth from '../components/Auth'

const Landing = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center '>
      <h1 className=' text-3xl font-bold p-4 '>Welcome to MatchBuzz</h1>
      <Auth />

    </div>
  )
}

export default Landing