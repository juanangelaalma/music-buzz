import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Choose from './components/Choose'
import Services from './components/Services'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Choose />
      <Services />
    </Fragment>
  )
}

export default App
