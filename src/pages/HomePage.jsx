import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Speciality from '../components/Speciality'
import TopDoctors from '../components/TopDoctors'
import FooterBanner from '../components/FooterBanner'
import Footer from '../components/Footer'
import Credit from '../components/Credit'

function HomePage() {
  return (
    <div>
      <Banner/>
      <Speciality/>
      <TopDoctors/>
      <FooterBanner/>
    </div>
  )
}

export default HomePage
