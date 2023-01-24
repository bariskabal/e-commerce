import Image from 'next/image'
import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Title from './Title'
import {GiCancel} from 'react-icons/gi'


const Search = ({setIsSearchModal}) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] after:w-screen after:h-screen after:bg-white after:opacity-70 after:absolute after:top-0 after:left-0 grid place-content-center'>
      <OutsideClickHandler onOutsideClick={() => {setIsSearchModal(false)}}>
        <div className='w-full h-full grid place-content-center'>
          <div className='relative z-50 w-[23rem] md:w-[37.5rem] bg-white border-2 rounded-3xl p-10'>
            <Title addClass='text-[2.5rem] text-center text-black'>Search</Title>
            <input type='text' placeholder='Search...' className='border w-full my-5 p-2' />
            <div>
              <ul>
                <li className='flex justify-between items-center p-2 hover:bg-primary hover:text-white transition-all rounded-md'>
                  <div className='relative flex'>
                    <Image src='/images/product-1.jpg' width={70} height={70} alt='' />
                  </div>
                  <span className='font-bold'>Pink sweater</span>
                  <span className='font-bold'>$100</span>
                </li>
                <li className='flex justify-between items-center p-2 hover:bg-primary hover:text-white transition-all rounded-md'>
                  <div className='relative flex'>
                    <Image src='/images/product-1.jpg' width={70} height={70} alt='' />
                  </div>
                  <span className='font-bold'>Pink sweater</span>
                  <span className='font-bold'>$100</span>
                </li>
                <li className='flex justify-between items-center p-2 hover:bg-primary hover:text-white transition-all rounded-md'>
                  <div className='relative flex'>
                    <Image src='/images/product-1.jpg' width={70} height={70} alt='' />
                  </div>
                  <span className='font-bold'>Pink sweater</span>
                  <span className='font-bold'>$100</span>
                </li>
              </ul>
              <button onClick={() => setIsSearchModal(false)} className='absolute top-3 right-3'>
                  <GiCancel size={25} className='hover:text-primary transition-all' />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default Search