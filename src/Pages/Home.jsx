import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='py-4 my-20 px-3 md:w-[80%] mx-auto w-full'>
        <Blogs/>
      </div>
        <Pagination/>
    </div>
  )
}

export default Home
