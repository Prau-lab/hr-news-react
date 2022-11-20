import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import "./App.css"
import Hrevents from './components/Hrevents'
import Socialsite from './components/Socialsite'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Subpage from './components/Subpage'
import Hrstories from './components/Hrstories'

const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <div className='main-container'>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        {/* <Socialsite />
        <Navbar />
        <Carousel />
        <Footer />
        <Subpage />
        <Hrevents /> */}

        <Hrstories />
      </div>
    </>
  )
}

export default App



