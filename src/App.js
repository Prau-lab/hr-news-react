import React from 'react'
import "./App.css"
import Socialsite from './components/Socialsite'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Subpage from './components/Subpage'

const App = () => {
  return (
    <>
      <div className='main-container'>
        {/* <Socialsite />
        <Navbar />
        <Carousel />
        <Footer /> */}

        <Subpage />
      </div>
    </>
  )
}

export default App



