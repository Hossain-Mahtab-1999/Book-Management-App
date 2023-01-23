import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

import { BsBookHalf } from 'react-icons/bs'

const Login = () => {
    const [error, setError] = useState(null)

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const { username, password } = inputs

    const handleChange = (e) => {
        const formField = e.target.name;
        const formValue = e.target.value;

        setInputs(prevState => {
            return { ...prevState, [formField]: formValue }
        })
    }

    const { login } = useContext(AuthContext)

    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(inputs)

        }
        catch (error) {
            setError(error.response.data)
        }
    }

    const { currentUser } = useContext(AuthContext)

    console.log(currentUser)

    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser, navigate])
    


    return (
        <div className='h-[100vh] max-w-[1640px] bg-[#dcdcdc] flex items-center justify-center'>
            <div className=" w-[500px] md:w-[700px] lg:w-[900px] h-[600px] bg-white flex rounded-[10px]  overflow-hidden m-4 " >

                <div className="flex-1 bg-[url('https://images.pexels.com/photos/4466381/pexels-photo-4466381.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover  ">
                    <div className='bg-black/40 text-white p-4 flex flex-col justify-center  h-full '>
                        <h1 className='w-full text-3xl font-bold'><BsBookHalf size={45} className='mr-4 fill-[#203A0F]' />Eco-Lib.</h1>
                        <p className='mb-4 text-white/80 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.</p>
                        <span className='text-white font-extralight'>Don't have an account? <Link to="/register"><button className='text-2xl text-white border-b-2 border-b-[#3E7101] font-semibold cursor-pointer hover:scale-[1.1]'>Register</button> </Link>  </span>
                    </div>

                </div>
                <div className="flex-1 bg-white ">
                    <div className="flex flex-col p-4 justify-center h-full " >
                        <h1 className='text-5xl text-[#001000] font-semibold mb-4'>Login</h1>
                        <form className='flex flex-col gap-4' >
                            <input type="text" id='username' name='username' placeholder='Username' required value={username} onChange={handleChange} className='p-1 my-1 outline-none border-b-2 ' />
                            <input type="text" autoComplete='off' id='password' name='password' placeholder='******' required value={password} onChange={handleChange} className='p-1 my-1 outline-none border-b-2' />
                            {error && <p className='text-red-500'>{error}</p>}
                            <button onClick={handleLogin} className='bg-[#001000] mt-4 p-2 rounded-[10px] font-bold text-white cursor-pointer hover:bg-[#3E7101]'>Log in</button>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login
