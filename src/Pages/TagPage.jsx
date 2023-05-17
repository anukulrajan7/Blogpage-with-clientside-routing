import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
      <div className='py-4 my-20 px-3 md:w-[80%] mx-auto w-full'>
        <button
        className='bg-purple-700 my-2 mx-auto w-fit text-white py-2 px-7 shadow-md shadow-purple-500 rounded-md font-serif text-[20px]'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2 className='bg-slate-900  text-white px-3 py-2 font-serif w-fit'> 
            Blogs on <span>{tag}</span>
        </h2>
        <Blogs/>
      </div>
       
        <Pagination/>
      
    </div>
  )
}

export default TagPage
