import React, { useEffect, useState } from 'react'
import serviceData from '../assets/images.json'

const Services = () => {
    const[services,setServices]=useState([])

    useEffect(()=>{
        setServices(serviceData)
    },[])
  return (
    <div>
      <section id='services' className='services container py-5'>
        <h2 className='text-center text-dark mb-4'>Our Services</h2>
        <div className='row g-4'>
         {services.map((service)=>(
            <>
            <div className='col-md-4 col-sm-6'>
            <div className='service-item card'>
                <img src={service.url}
                alt={service.title}
                className='card-img-top service-img' />
                <div className='card-body'>
                    <h3 className='card-title text-dark'>{service.title}</h3>
                </div>
                </div>
                </div>
                </>
         ))}
        </div>
      </section>
    </div>
  )
}

export default Services