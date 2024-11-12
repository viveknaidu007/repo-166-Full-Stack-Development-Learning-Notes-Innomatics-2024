import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const{id}=useParams()
    const[title,setTitle]=useState('')
    const[content,setContent]=useState('')
    const[imageUrl,setImageUrl]=useState('')
    const[author,setAuthor]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/api/blogs/${id}`,{title,content,imageUrl,author})
        .then(res=>navigate('/'))
        .catch(err=>console.log('Error in posting the blog',err))
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(res=>{
            setTitle(res.data.title)
            setContent(res.data.content)
            setImageUrl(res.data.imageUrl)
            setAuthor(res.data.author)
        })
        .catch(err=>console.log('Error',err))
    },[id])
  return (
    <div>
      <h3>Edit Blog</h3>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Title:</label>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
            <label>Content:</label>
            <textarea rows={4} value={content} onChange={(e)=>setContent(e.target.value)} />
        </div>
        <div>
            <label>ImageUrl:</label>
            <input type='text' value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} />
        </div>
        <div>
            <label>Author:</label>
            <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <button type='submit'>Update Blog</button>
      </form>
    </div>
  )
}

export default Update