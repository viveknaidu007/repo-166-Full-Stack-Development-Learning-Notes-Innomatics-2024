import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='banner'>
        <div className='title'>
            <h2>Event Management</h2>
            <p>Events and Weddings</p>
        </div>
        <div className='tag'>
            <label>New Letter</label>
            <div>
                <input type='text' placeholder='E-mail' />
                <button>Sucbscribe</button>
            </div>
            <p>SignUp with your email address to receive news and updates</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer