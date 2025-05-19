import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Credit from './components/Credit'
import BookAppointmentPage from './pages/BookAppointmentPage'
import CreateAccountPage from './pages/CreateAccountPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/BookAppointment' element={<BookAppointmentPage/>}/>
        <Route path='/CreateAccount' element={<CreateAccountPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
      </Routes>
      <Footer/>
      <Credit/>
    </div>
  )
}

export default App
