import axios from 'axios'
import React, { useState } from 'react'
import  toast from 'react-hot-toast'
const Contact = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[subject,setSubject]=useState('')
    const[message,setMessage]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:8000/api/v1/event',{name,email,subject,message})
            .then((res)=>{
                toast.success(res.data.message);
                setName('');
                setEmail('')
                setSubject('')
                setMessage('')
            }
    )
    .catch(error=>{
        toast.error(error.response.data.message)
    })
    }
  return (
    <div>
      <div className='conctact-page container my-5'>
        <div className='row'>
            <div className='col-md-6'>
                <h2 className='form-title mb-4'>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                        <input type='text' className='form-control' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>

                    <div className='form-group mb-3'>
                        <input type='email' className='form-control' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className='form-group mb-3'>
                        <input type='text' className='form-control' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
                    </div>

                    <div className='form-group mb-3'>
                      <textarea rows={8} className='form-control' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Send Message</button>
                </form>
            </div>

            {/* Map column */}
            <div className='col-md-6 d-flex align-items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d60902.78054587302!2d78.32967394707512!3d17.439419214697008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bcb91f3fdf6bde9%3A0x752db86a6ab3be2a!2s205%2C%20Innomatics%20Research%20Labs%2C%20Fortune%20Signature%2C%20beside%20Metro%20Station%20Jntu%20College%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500085!3m2!1d17.4980302!2d78.3899895!5e0!3m2!1sen!2sin!4v1731333363460!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" ></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact