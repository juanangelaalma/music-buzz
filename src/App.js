import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <About />
    </Fragment>
  )
}

export default App
