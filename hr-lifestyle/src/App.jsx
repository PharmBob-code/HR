import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import TopColor from '../public/TopColor'
import Header from '../public/Header'
import Hero from '../public/Hero'
import About from '../public/About'
import OurService from '../public/OurService'

function App() {
 return(
  <>
  <TopColor />
  <Header />
  <Hero />
  <About />
  <OurService />
  </>
 )
}
export default App
