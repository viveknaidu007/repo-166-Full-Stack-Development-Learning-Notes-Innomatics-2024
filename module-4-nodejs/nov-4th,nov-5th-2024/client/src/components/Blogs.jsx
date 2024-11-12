import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Blogs = () => {
    const[blogs,setBlogs]=useState([])


    useEffect(()=>{
        axios.get('http://localhost:5000/api/blogs')
        .then(res=>setBlogs(res.data))
        .catch(err=>console.log('Error',err))
    })


    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/api/blogs/${id}`)
        .then(res=>setBlogs(blogs.filter(blog=>blog._id!==id)))
        .catch(err=>console.log('Error',err))
    }
  return (
    <div>
      <h3>Travelling Blog</h3>
      <Link to='/create'>Add Blog</Link>
      {blogs.map((blog,index)=>(
        <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            {blog.imageUrl &&<img src={blog.imageUrl} />}
            <p>{blog.author}</p>


            <button onClick={()=>handleDelete(blog._id)}>Delete</button>
            <Link to={`/edit/${blog._id}`}>Edit</Link>
        </div>
       
      ))}
    </div>
  )
}


export default Blogs