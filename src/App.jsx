import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Section from './components/Section'
import './App.css'




const App = () => {
  return (
    <div className={"app"}>
      <Navbar />
      <Banner />
      <Section />
    </div>
  )
}

export default App
