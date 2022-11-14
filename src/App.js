import React from 'react'
import "./App.css"
import Socialsite from './components/Socialsite'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'

const App = () => {
  return (
    <>
      <div className='main-container'>
        <Socialsite />
        <Navbar />
        <Carousel />
      </div>
    </>
  )
}

export default App



