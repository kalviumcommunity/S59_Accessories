import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import FrontPage from './components/FrontPage'
function App() {

  return (
    <div className="FirstBanner">
    <div className='Navigation'>
      <Navbar />
    </div>
        <FrontPage />
    </div>
  )
}

export default App
