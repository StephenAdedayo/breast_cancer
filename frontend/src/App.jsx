import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './pages/Services'
import DiagnosisPage from './pages/DiagnosisPage'

const App = () => {

  const location = useLocation()


  useEffect(() => {
     window.scroll({top:0, behavior:"smooth"})
  }, [location])

  return (
    <div className='bg-gray-100 min-h-screen'>
    <Header />
    <main className='xl:px-40 md:px-20 px-5 min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/diagnose' element={<DiagnosisPage />}/>
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
