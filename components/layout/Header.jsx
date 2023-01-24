import { useState } from 'react'
import Logo from '../ui/Logo'
import {FaUserAlt,FaShoppingCart,FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu,GiCancel} from 'react-icons/gi'
import Search from '../ui/Search'

const Header = () => {

const [isSearchModal,setIsSearchModal] = useState(false)
const [isMenuModal,setIsMenuModal] = useState(false)

  return (

    <div className='h-[5-5rem] bg-white'>
        <div className='sm:container container-fluid sm:mx-auto mx-5 my-3 flex justify-between text-white items-center h-full'>
            <Logo />
            <nav className={`sm:static absolute top-0 left-0 sm:h-auto h-full sm:w-auto w-full font-mont font-bold sm:text-black text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && '!grid place-content-center '}`}>
                <ul className='flex gap-x-2 sm:flex-row flex-col items-center'>
                    <li className='px-[.313rem] py-[1.25rem] uppercase text-center hover:text-primary cursor-pointer transition-all'>
                        <a href="#" className=''>Home</a>
                    </li>
                    <li className='px-[.313rem] py-[1.25rem] uppercase text-center hover:text-primary cursor-pointer transition-all'>
                        <a href="#" className=''>Products</a>
                    </li>
                    <li className='px-[.313rem] py-[1.25rem] uppercase text-center hover:text-primary cursor-pointer transition-all'>
                        <a href="#" className=''>About</a>
                    </li>
                    <li className='px-[.313rem] py-[1.25rem] uppercase text-center hover:text-primary cursor-pointer transition-all'>
                        <a href="#" className=''>Contact</a>
                    </li>
                    <li className='px-[.313rem] py-[1.25rem] sm:hidden uppercase text-center hover:text-primary cursor-pointer transition-all'>
                        <a href="#" className='hover:text-primary transition-all'>
                            <FaUserAlt className='hover:text-primary transition-all'/>
                        </a>
                    </li>
                    <li className='px-[.313rem] py-[1.25rem] sm:hidden uppercase text-center hover:text-primary cursor-pointer transition-all'>
                        <a href="#" className='hover:text-primary transition-all'>
                            <FaShoppingCart className='hover:text-primary transition-all'/>
                        </a>
                    </li>
                </ul>
                {isMenuModal && (
                <button className={`absolute top-4 right-4 z-50 sm:hidden ${isMenuModal === true && 'sm:flex'}`}>
                    <GiCancel size={25} onClick={() => setIsMenuModal(false)} className='hover:text-primary transition-all' />
                </button>
                )}
            </nav>
            <div className='flex gap-x-4 items-center text-black'>
                <a href="#" className='hover:text-primary hidden sm:inline-block transition-all'>
                    <FaUserAlt className='hover:text-primary transition-all'/>
                </a>
                <a href="#" className='hover:text-primary hidden sm:inline-block transition-all'>
                    <FaShoppingCart className='hover:text-primary transition-all'/>
                </a>
                <button onClick={() => setIsSearchModal(true)} href="#" className='hover:text-primary text-xl sm:text-[1rem] transition-all'>
                    <FaSearch className='hover:text-primary transition-all'/>
                </button>
                <button onClick={() => setIsMenuModal(true)} className='sm:hidden inline-block'>
                    <GiHamburgerMenu className='text-3xl hover:text-primary transition-all' />
                </button>
            </div>
        </div>

        {isSearchModal &&(
            <Search setIsSearchModal={setIsSearchModal} />
        )}
    </div>
  )
}

export default Header