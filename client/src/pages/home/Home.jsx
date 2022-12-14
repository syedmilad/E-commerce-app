import React from 'react'
import Slider from '../../slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Categoreis from '../../components/categoreis/Categoreis'
import Contact from '../../components/contact/Contact'


const Home = () => {
  return (
    <div className='home'> 
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categoreis/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home