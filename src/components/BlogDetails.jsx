import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='my-4 w-full py-10 hover:bg-slate-100 transition-all duration-75 scroll-smooth px-10 flex flex-col gap-4 bg-slate-200 shadow-md text-white shadow-gray-500 rounded-sm'>
      <NavLink to={`/blog/${post.id}`} className="bg-slate-900 w-fit px-2 py-2 shadow-md rounded-sm text-bold font-serif capitalize mx-auto " >
        <span>{post.title}</span>
      </NavLink>
 <div className='flex  gap-2 items-center flex-col md:flex-row'>
 <p className='bg-slate-900 w-fit  text-center  py-1 px-3'>
        By { '  '}
        <span>{post.author}</span>
        {''} on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='text-purple-500'>{post.category}
         
            </span>
        </NavLink>
      </p>
      <p className='text-purple-500 text-end'
      > Posted on {post.date} </p>
 </div>
      <p className=' font-serif bg-transparent text-slate-900 text-[20px]'> {post.content}</p>
      <div className='flex gap-3 flex-wrap my-2'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`} 
            className="bg-slate-900 w-fit px-2 py-1 shadow-md rounded-sm text-bold font-serif capitalize">
                <span>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
