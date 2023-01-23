import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsBookHalf } from 'react-icons/bs'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { IoLogOutOutline } from 'react-icons/io5'
import {AiFillSetting} from 'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'


const Navbar = () => {

    const { currentUser, logout } = useContext(AuthContext)

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }


    const ref = useRef()

    const [dropdownClick, setDropdownClick] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (dropdownClick && ref.current && !ref.current.contains(e.target)) {
                setDropdownClick(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [dropdownClick])

    const handleDropdown = () => {
        setDropdownClick(!dropdownClick)
    }

    const [error, setError] = useState(null)



    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            await logout()
        } catch (error) {
            setError(error.response.data)
        }
    }

    console.log(error)


    return (
        <div className='bg-[#001000] z-10 text-white flex justify-between items-center m-auto h-24 max-w-[1640px] px-4' ref={ref} >
            <h1 > <Link to="/" className='w-full text-3xl font-bold text-white flex items-center'><BsBookHalf size={45} className='mr-4 fill-[#203A0F]' />Eco-Lib.</Link> </h1>

            <ul className='hidden md:flex '  >
                <li > <Link to="/" className='p-4 cursor-pointer hover:text-[#3E7101] hover:border-b hover:border-b-[#3E7101]  flex'>Home</Link></li>
                <li > <Link to="/book" className='p-4 cursor-pointer hover:text-[#3E7101] hover:border-b hover:border-b-[#3E7101]  flex'>Book</Link></li>
                <li > <Link to="/about" className='p-4 cursor-pointer hover:text-[#3E7101] hover:border-b hover:border-b-[#3E7101]  flex'>About</Link></li>
                <li > <Link to="/contact" className='p-4 cursor-pointer hover:text-[#3E7101] hover:border-b hover:border-b-[#3E7101] flex'>Contact</Link></li>

                <div onClick={handleDropdown} className={'relative p-4 flex items-center'}   >
                    {dropdownClick ? <AiFillSetting size={20} /> : <AiOutlineSetting size={20}   /> }

                    <div className={dropdownClick ? ' absolute z-10 right-[-16px] top-[60px]  w-[120px] h-auto ease-in-out duration-300 shadow-xl ' : 'fixed right-[-100%]'}  >
                        <div className=' flex flex-col w-full  bg-[#001000] gap-2 p-1 md:p-2 ' >
                            <Link to={`/profile/${currentUser.id}`} className='text-white p-2 hover:scale-[1.1] w-[100%] flex items-center hover:shadow-md'> Profile </Link>
                            <button onClick={handleLogout} className='text-white p-2 hover:scale-[1.1] w-[100%] flex items-center hover:shadow-md'> Logout <IoLogOutOutline /> </button>
                        </div>

                    </div>

                </div>

            </ul>


            <div className='flex items-center md:hidden'>

                <div onClick={handleMenu} >
                    {menu ? <AiOutlineClose className='text-3xl' /> : <AiOutlineMenu className='text-3xl' />}

                    <div className={menu ? 'fixed z-10  left-0 top-0 w-[40%] h-full border-r border-r-[#203A0F] bg-[#001000] ease-in-out duration-300' : 'fixed left-[-100%]'} >
                        <h1 ><Link to="/" className='w-full text-3xl font-bold text-white flex flex-col p-4'><BsBookHalf size={40} className='fill-[#203A0F]' />
                            Eco-Lib.</Link></h1>

                        <ul className=' p-4' >
                            <li ><Link to="/" className='flex p-4 border-b border-b-[#203A0F] cursor-pointer hover:bg-[#3E7101] '>Home</Link></li>
                            <li ><Link to="/book" className='flex p-4 border-b border-b-[#203A0F] cursor-pointer hover:bg-[#3E7101] '>Book</Link></li>
                            <li > <Link to="/addbook " className='p-4 flex items-center border-b border-b-[#203A0F] cursor-pointer hover:bg-[#3E7101]' >Add Book</Link> </li>
                            <li ><Link to="/about" className='p-4 flex border-b border-b-[#203A0F] cursor-pointer hover:bg-[#3E7101]'>About</Link></li>
                            <li ><Link to="/contact" className='p-4 flex border-b border-b-[#203A0F] cursor-pointer hover:bg-[#3E7101]'>Contact</Link></li>
                        </ul>
                    </div>

                </div>


                <div onClick={handleDropdown} className={'relative p-4'}  >
                    {dropdownClick ? < AiFillSetting /> : <AiOutlineSetting />}

                    <div className={dropdownClick ? ' absolute z-10 right-[-16px] top-[60px]  w-[120px] h-auto ease-in-out duration-300 shadow-xl ' : 'fixed right-[-100%]'}  >
                        <div className=' flex flex-col w-full  bg-[#001000] gap-2 p-1 md:p-2 ' >
                            <Link to={`/profile/${currentUser.id}`} className='text-white p-2 hover:scale-[1.1] w-[100%] flex items-center hover:shadow-md'> Profile </Link>
                            <button onClick={handleLogout} className='text-white p-2 hover:scale-[1.1] w-[100%] flex items-center hover:shadow-md'> Logout <IoLogOutOutline /> </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Navbar
