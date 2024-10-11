import React from 'react'
import { appleImg , searchImg , bagImg } from '../utils'

const Navbar = () => {
  return (
      <header className='w-full py-5 sm:px-10 px-10 flex justify-between items-center '>
          <nav className='flex w-full screen-max-width'>
              <img src={appleImg} alt="Apple" width={14} 
                  height={18} />
              

              <div className='flex flex-1 justify-center  max-sm:hidden'>
                  {['Phones', 'Macbooks', 'Tablets'].map((nav) => (
                      <div key={nav} className='px-5 text-sm text-gray cursor-pointer hover:text-white
                      transition-all'>
                          {nav}
                          </div>
                  ))}
              </div>

              <div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1'>
                  <img src={searchImg} alt="search" width={18} 
                  height={18} />

                  <img src={bagImg} alt="search" width={18} 
                  height={18} />
              </div>
              
          </nav>
    </header>
  )
}

export default Navbar