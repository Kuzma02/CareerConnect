import React from 'react'
import { SectionTitle } from '../components'

const Profile = () => {
  return (
    <>
    <SectionTitle title="Profile" path="Home / Profile" />
    <div className='max-w-7xl mx-auto flex flex-wrap gap-x-5 justify-center items-end my-20'>
        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Lastname</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>

      <button className="btn bg-primary-color text-white font-bold">Submit</button>

    </div>
    </>
  )
}

export default Profile