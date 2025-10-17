import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Consulting from './Pages/Consulting'
import Contact from './Pages/Contact'
import Features from './Pages/Features'
import Products from './Pages/Products'
import Services from './Pages/Services'

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes >
          <Route path='/' element={<Home/>}></Route>
          <Route path='About' element={<About/>}></Route>
          <Route path='Consulting' element={<Consulting/>}></Route>
          <Route path='Contact' element={<Contact/>}></Route>
          <Route path='Features' element={<Features/>}></Route>
          <Route path='Products' element={<Products/>}></Route>
          <Route path='Services' element={<Services/>}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
