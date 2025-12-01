import React from 'react'
import Headers from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopBarbers from '../components/TopBarbers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Headers />
      <SpecialityMenu />
      <TopBarbers />
      <Banner />
    </div>
  )
}

export default Home
