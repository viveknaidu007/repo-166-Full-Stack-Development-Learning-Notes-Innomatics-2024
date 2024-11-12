import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const CreateBlog = () => {
    const[title,setTitle]=useState('')
    const[content,setContenet]=useState('')
    const[imageUrl,setImageUrl]=useState('')
    const[author,setAuthor]=useState('')


    const navigate=useNavigate()


 const handleSubmit=(e)=>{
    e.preventDefault()
    try{
        axios.post('http://localhost:5000/api/blogs',{title,content,imageUrl,author})
        .then(res=>navigate('/'))
        .catch((err)=>{
            console.log('Error in posting the blog',err)}
        )
    }catch(err){
        console.log('Error in fetching the post',err)
    }
 }
  return (
    <div>
      <h3>Create Blog</h3>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Title:</label>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
            <label>Content:</label>
            <textarea rows={4} value={content} onChange={(e)=>setContenet(e.target.value)} />
        </div>
        <div>
            <label>Image:</label>
            <input type='text' value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} />
        </div>
        <div>
            <label>Author:</label>
            <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <button type='submit'>Add Blog</button>
      </form>
    </div>
  )
}


export default CreateBlog