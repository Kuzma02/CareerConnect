import React from 'react'

const SectionTitle = ({title, path}) => {
  return (
    <div className='border-b py-10 sm:pt-24 max-sm:pt-16 border-gray-600'>
        <h1 className='text-8xl text-center mb-10 max-md:text-7xl max-sm:text-6xl'>{ title }</h1>
        <p className='text-2xl text-center max-sm:text-xl'>{ path }</p>
    </div>
  )
}

export default SectionTitle