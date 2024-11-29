import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

function App() {
  return (
    <div className='w-full h-auto'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App