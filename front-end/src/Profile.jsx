import React from 'react'
import img from '../public/images/seraj.jpg'
function Profile() {
  return (
    <div>
      <div className='d-flex justify-content-center flex-column align-items-center mt-3 img'>

        <div className='d-flex align-items-center flex-column mt-5 text-white'>
          <img className='w-25 h-5 border rounded-circle' src={img} alt="" />
          <h3>Name:Seraj</h3>
          <h3>Email:SerajAhmadshb@gmail.com </h3>

        </div>
        <div>
          <button className='btn btn-primary me-2'>Edit</button>
          <button className='btn btn-danger'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile