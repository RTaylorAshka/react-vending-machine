import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Machine from './Machine'
import Snacks from './Snacks'
import Drinks from './Drinks'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Machine />} />
          <Route path='/Snacks' element={<Snacks />} />
          <Route path='/Drinks' element={<Drinks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
