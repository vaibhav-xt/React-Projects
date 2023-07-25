import React from 'react'
import Carousel from '../Components/Home/Carousel'
import Categories from '../Components/Home/Categories'

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className='max-w-[1400px] m-auto px-8 my-12'>
        <Categories />
      </div>
    </div>
  )
}
