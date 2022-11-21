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
import Career from './components/Career'
import Newsletter from './components/Newsletter'
import Books from './components/Books'
import Appointed from './components/Appointed'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FirstBanner from './components/FirstBanner'

const App = () => {
  return (
    <>
      <Router>
        <div className='main-container'>
          <Socialsite />
          <Navbar />
          <FirstBanner />
          <Routes>
            <Route exact path='/' element={<Carousel />} />
            <Route exact path='/Hrevents' element={<Hrevents />} />
            <Route exact path='/Hrstories' element={<Hrstories />} />
            <Route path='/Appointed' element= {<Appointed />}></Route>
            <Route exact path='/Newsletter' element={<Newsletter />} />
            <Route exact path='/Career' element={<Career />} />
            <Route exact path='/Books' element={<Books />} />
            <Route exact path='/Subpage' element={<Subpage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App



