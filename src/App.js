import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Choose from './components/Choose'
import Services from './components/Services'
import Wthree from './components/Wthree'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
      <Choose />
      <Services />
      <Wthree />
    </Fragment>
  )
}

export default App
