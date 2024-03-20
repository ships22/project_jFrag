import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'

function App() {
  return (
    <Router>
      <Header />
      {/* <Footer /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/test' element={<P />} /> */}
        {/* <Route path='/test/:id' element={<P />} /> */}
      </Routes>
    </Router>
  )
}

export default App
