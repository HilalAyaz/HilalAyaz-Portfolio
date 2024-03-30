import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import HomeComponent from './components/Home'
import AboutComponent from './components/About'
import ResumeComponent from './components/Resume'
import PortfolioComponent from './components/Portfolio'
import ContactComponent from './components/Contact'
import FooterComponent from './components/Footer'
import LoadingComponent from './components/Loading'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <NavbarComponent />
          <Routes>
            <Route exact path='/' element={<HomeComponent />} />
            <Route path='/about' element={<AboutComponent />} />
            <Route path='/resume' element={<ResumeComponent />} />
            <Route path='/portfolio' element={<PortfolioComponent />} />
            <Route path='/contact' element={<ContactComponent />} />
          </Routes>
          <FooterComponent />
        </>
      )}
    </div>
  )
}

export default App
