import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';


const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
      
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div className='w-full overflow-y-auto flex gap-10'>
      <Header/>
    <div className='md:w-[80%] mx-auto py-20 my-5'>
        <button
        className='bg-purple-700 my-2 text-white py-2 px-7 shadow-md shadow-purple-500 rounded-md font-serif text-[20px]'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
      {
        loading ?
        (<div>
            <p> Loading</p>
        </div>) :
        blog ?
        (<div className='flex flex-col w-full justify-center'>
           <div
           className='lg:w-[50%] w-full mx-auto'> <BlogDetails post={blog} /></div>
            <h2 className='text-purple-900 font-bold  text-2xl shadow-gray-300 bg-white shadow-md rounded-sm px-3 py-2 font-serif w-fit t'> Related Blogs </h2>
          <div className='grid lgw-[80%] lg:grid-cols-2 grid-col-1 py-2 px-9 gap-4'> 
          {
                relatedblogs.map( (post) => (
                   
                        <BlogDetails post={post} key={post.id} />
                 
                ) )
            }
          </div>

        </div>) :
        (<div>
            <p>No Blog Found</p>
        </div>)
       
      }</div>


    </div>
  )
}

export default BlogPage
