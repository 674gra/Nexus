import React from 'react'
import { inject } from '@vercel/analytics';
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
inject()
function App() {
  return (
    <>
      <NavBar/>  
      <Hero/> 
      <About/> 
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App