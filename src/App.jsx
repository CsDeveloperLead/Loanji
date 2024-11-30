import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-full h-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App